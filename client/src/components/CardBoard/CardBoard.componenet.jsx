import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Card from "../Card/Card.componenet";

import styles from "./cardBoard.module.css";

const CardBoard = ({ detailHandler, allPokemons }) => {
  const currentPage = useSelector((state) => state.currentPage);
  const [page, setPage] = useState();

  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  return (
    <section className={`${styles.cardBoard}`}>
      <label>
        <p className={styles.boardLabel}>Pokedex o.o.1</p>
        <div className={styles.cardList}>
          {allPokemons.map((pokemon, key) => {
            return (
              <Card key={key} pokemon={pokemon} detailHandler={detailHandler} />
            );
          })}
        </div>
      </label>
    </section>
  );
};

export default CardBoard;
