import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  originFilter,
  sortAndOrderFilter,
  typeFilter,
} from "../../Redux/Actions/actions";
import { capitalize } from "../../utils/capitalize";

import styles from "./pokefilter.module.css";

const PokeFilter = () => {
  const dispatch = useDispatch();
  const [origin, setOrigin] = useState("both");
  const [type, setType] = useState("all");
  const [order, setOrder] = useState("A-Z");
  const [atributeToSort, setAtributeToSort] = useState("pokemon_id");
  const filters = useSelector((state) => state.filterSetUp);
  const alltypes = useSelector((state) => state.allTypes);
  const handleFilterChange = (e, filterType) => {
    const filterSelection = e.target.value;

    switch (filterType) {
      case "origin":
        setOrigin(filterSelection);
        dispatch(originFilter(filterSelection));
        break;
      case "type":
        setType(filterSelection);
        dispatch(typeFilter(filterSelection));
        break;
      case "order":
        setOrder(filterSelection);
        dispatch(
          sortAndOrderFilter({
            order: filterSelection,
            atribute: atributeToSort,
          })
        );
        break;
      case "sortBy":
        setAtributeToSort(filterSelection);
        dispatch(
          sortAndOrderFilter({ order: order, atribute: filterSelection })
        );
        break;
      default:
        break;
    }
  };

  return (
    <figcaption className= {styles.caption}> Filters:
     <div className={styles.filterContainer}>
      <span>
        <label htmlFor="originFilter">
          Origin
          <select
            value={filters.origin}
            name="origin"
            id="originFilter"
            onChange={(e) => handleFilterChange(e, "origin")}
          >
            <option value="local">Added by user</option>
            <option value="api">From Api</option>
            <option value="both">Both</option>
          </select>
        </label>
        <label htmlFor="orderFilter">
          Order
          <select
            value={filters.order}
            name="order"
            id="orderFilter"
            onChange={(e) => handleFilterChange(e, "order")}
          >
            <option value="A-Z">Ascending</option>
            <option value="Z-A">Descending</option>
          </select>
        </label>
      </span>
      <span>
        
        <label htmlFor="typeFilter">
          Type
          <select
            value={filters.type}
            name="type"
            id="typeFilter"
            onChange={(e) => handleFilterChange(e, "type")}
          >
            <option value="all">All Types</option>
            {alltypes.map((e, key) => {
              return (
                <option key={key} value={e.nombre_type}>
                  {capitalize(e.nombre_type)}
                </option>
              );
            })}
          </select>
        </label>
        <label htmlFor="sortBy">
          SortedBy
          <select
            name="sortBy"
            value={atributeToSort}
            id="sortBy"
            onChange={(e) => handleFilterChange(e, "sortBy")}
          >
            <option value="pokemon_id">Id</option>
            <option value="hp">Life</option>
            <option value="attack">Attack</option>
            <option value="defense">Defense</option>
            <option value="speed">Speed</option>
          </select>
        </label>
      </span>
    </div>
    </figcaption>
  );
};

export default PokeFilter;
