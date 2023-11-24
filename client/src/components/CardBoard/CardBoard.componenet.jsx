import { useSelector } from "react-redux";

import Card from "../Card/Card.componenet";
import styles from "./cardBoard.module.css";

const CardBoard = ({ detailHandler, deleteHandler }) => {
  const allPokemonsToShow = useSelector(state => state.allPokemonsToShow)

  return (
    <section className={`${styles.cardBoard}`}>
      <label>
        <p className={styles.boardLabel}>Pokedex o.o.1</p>
        <div className={styles.cardList}>
          {allPokemonsToShow.map((pokemon, key) => (
            <Card key={key} pokemon={pokemon} detailHandler={detailHandler} deleteHandler={deleteHandler} />
          ))}
        </div>
      </label>
    </section>
  );
};

export default CardBoard;
