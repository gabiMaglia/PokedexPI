import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card.componenet";
import styles from "./cardBoard.module.css";
import {
  nextPage,
  originFilter,
  sortAndOrderFilter,
  prevPage,
  typeFilter,
} from "../../Redux/Actions/actions";
import { useState } from "react";

const CardBoard = ({ detailHandler }) => {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.allPokemonsToShow);
  const alltypes = useSelector((state) => state.allTypes);

  const [origin, setOrigin] = useState("both");
  const [type, setType] = useState("all");
  const [order, setOrder] = useState("A-Z");
  const [atributeToSort, setAtributeToSort] = useState("pokemon_id");
  const filters = useSelector((state) => state.filterSetUp);


  const handleOriginFilterChange = (e) => {
    const filterSelection = e.target.value;
    setOrigin(filterSelection);
    dispatch(originFilter(filterSelection));
  };
  const handleTypeFilterChange = (e) => {
    const filterSelection = e.target.value;
    setType(filterSelection);
    dispatch(typeFilter(filterSelection));
  };
  const handleOrderFilterChange = (e) => {
    const filterSelection = e.target.value;
    setOrder(filterSelection);
    dispatch(
      sortAndOrderFilter({ order: filterSelection, atribute: atributeToSort })
    );
  };
  const handleSortFilterChange = (e) => {
    const filterSelection = e.target.value;
    setAtributeToSort(filterSelection);
    dispatch(sortAndOrderFilter({ order: order, atribute: filterSelection }));
  };

  const currentPage = useSelector((state) => state.currentPage);
  const handleNextPage = () => {
    dispatch(nextPage());
  };

  const handlePrevPage = () => {
    dispatch(prevPage());
  };

  return (
    <div className={styles.cardList}>
      <div className="pageSelectorContainer">
        <button onClick={handlePrevPage}>PREV</button>
        <span className="currentPage">{currentPage + 1}</span>
        <button onClick={handleNextPage}>NEXT</button>
      </div>

      <div className="filterContainer">
        <label htmlFor="originFilter">Origin</label>
        <select
          value={filters.origin}
          name="origin"
          id="originFilter"
          onChange={handleOriginFilterChange}
        >
          <option value="local">Added by user</option>
          <option value="api">From Api</option>
          <option value="both">Both</option>
        </select>
        <label htmlFor="typeFilter">Type</label>
        <select
          value={filters.type}
          name="type"
          id="typeFilter"
          onChange={handleTypeFilterChange}
        >
          <option value="all">All Types</option>
          {alltypes.map((e, key) => {
            return (
              <option key={key} value={e.nombre_type}>
                {e.nombre_type}
              </option>
            );
          })}
        </select>
        <label htmlFor="orderFilter">Order</label>
        <select
          value={filters.order}
          name="order"
          id="orderFilter"
          onChange={handleOrderFilterChange}
        >
          <option value="A-Z">Ascending</option>
          <option value="Z-A">Descending</option>
        </select>
        <label htmlFor="byWhatFilter">SortedBy</label>
        <select
          name="sortBy"
          value={filters.sortBy}
          id="byWhatFilter"
          onChange={handleSortFilterChange}
        >
          <option value="pokemon_id">ID</option>
          <option value="hp">Life</option>
          <option value="attack">Attack</option>
          <option value="defense">Defense</option>
          <option value="speed">Speed</option>
        </select>
      </div>

      {allPokemons?.map((pokemon, key) => {
        return (
          <Card key={key} pokemon={pokemon} detailHandler={detailHandler} />
        );
      })}
    </div>
  );
};

export default CardBoard;
