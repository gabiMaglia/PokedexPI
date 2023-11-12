import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card.componenet";
import styles from "./cardBoard.module.css";
import {
  nextPage,
  prevPage,
} from "../../Redux/Actions/actions";

import PokeFilter from "../PokeFilter/PokeFilter";

const CardBoard = ({ detailHandler }) => {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.allPokemonsToShow);
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

      <PokeFilter />

      {allPokemons?.map((pokemon, key) => {
        return (
          <Card key={key} pokemon={pokemon} detailHandler={detailHandler} />
        );
      })}
    </div>
  );
};

export default CardBoard;
