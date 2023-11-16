import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card.componenet";
import styles from "./cardBoard.module.css";
import { nextPage, prevPage } from "../../Redux/Actions/actions";

import PokeFilter from "../PokeFilter/PokeFilter";
import NavButtons from "../NavButtons/NavButtons";
import { useEffect, useState } from "react";

const CardBoard = ({ detailHandler, allPokemons }) => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.currentPage);

  const [page, setPage] = useState();
  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  const handleNextPage = () => {
    dispatch(nextPage());
  };
  const handlePrevPage = () => {
    dispatch(prevPage());
  };
  return (
    <section className={`${styles.cardBoard}`}>
      <label ><p className={styles.boardLabel}>Choose your pokemon:</p>
      <div className={styles.cardList}>
        {allPokemons.map((pokemon, key) => {
          return (
            <Card key={key} pokemon={pokemon} detailHandler={detailHandler} />
          );
        })}
      </div>
      </label>
      <div className={styles.controls}>
        <NavButtons
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
        <PokeFilter />
      </div>
      
    </section>
  );
};

export default CardBoard;
