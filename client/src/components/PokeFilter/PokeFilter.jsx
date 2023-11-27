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

  const alltypes = useSelector((state) => state.allTypes);

  const filtersOrigin = useSelector((state) => state.filterSetUp.origin);
  const filtersOrder = useSelector((state) => state.filterSetUp.order);
  const filtersType = useSelector((state) => state.filterSetUp.type);
  const filtersSortBy = useSelector((state) => state.filterSetUp.sortBy);

  const [localFilters, setLocalFilters] = useState({
    origin: filtersOrigin,
    order: filtersOrder,
    type: filtersType,
    sortBy: filtersSortBy,
  });

  const handleFilterChange = (e, filterType) => {
    const filterSelection = e.target.value;

    switch (filterType) {
      case "origin":
        dispatch(originFilter(filterSelection));
        break;
      case "type":
        dispatch(typeFilter(filterSelection));
        break;
      case "order":
        dispatch(
          sortAndOrderFilter({
            order: filterSelection,
            atribute: filtersSortBy,
          })
        );
        break;
      case "sortBy":
        dispatch(
          sortAndOrderFilter({ order: filtersOrder, atribute: filterSelection })
        );
        break;
      default:
        break;
    }
    setLocalFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: filterSelection,
    }));
  };

  return (
    <figcaption className={styles.caption}>
      Filters:
      <div className={styles.filterContainer}>
        <span>
          <label htmlFor="originFilter">
            Origin
            <select
              value={filtersOrigin}
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
              value={filtersOrder}
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
              value={filtersType}
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
              value={localFilters.sortBy}
              id="sortBy"
              onChange={(e) => handleFilterChange(e, "sortBy")}
            >
              <option value="pokemon_id">Id</option>
              <option value="pokemon_name">Name</option>
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
