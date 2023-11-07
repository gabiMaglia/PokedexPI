import Card from "../Card/Card.componenet";
import styles from "./cardBoard.module.css";

const CardBoard = ({ allPokemons, detailHandler }) => {
  return (
    <div className={styles.cardList}>
      {allPokemons?.map((pokemon, key) => {
        //  console.log(pokemon)
        return (
          <Card key={key} pokemon={pokemon} detailHandler={detailHandler} />
        );
      })}
    </div>
  );
};

export default CardBoard;
