import { useSelector } from "react-redux";
import Card from "../Card/Card.componenet";

import styles from "./cardBoard.module.css";

const CardBoard = ({ detailHandler, allPokemons }) => {
  const isLoading = useSelector((state) => state.isLoading);
  return (
    <section className={`${styles.cardBoard}`}>
      {isLoading ? (
        <h2>LOADING</h2>
      ) : (
        <>
          <label>
            <p className={styles.boardLabel}>Pokedex o.o.1</p>
            <div className={styles.cardList}>
              {allPokemons.map((pokemon, key) => (
                <Card
                  key={key}
                  pokemon={pokemon}
                  detailHandler={detailHandler}
                />
              ))}
            </div>
          </label>
        </>
      )}
    </section>
  );
};

export default CardBoard;
