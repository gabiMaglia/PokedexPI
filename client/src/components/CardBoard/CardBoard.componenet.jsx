import { useSelector } from "react-redux";
import Card from "../Card/Card.componenet";
import styles from "./cardBoard.module.css";


const CardBoard = ({ allPokemons, detailHandler }) => {

  const currentPage = useSelector(state => state.currentPage)
 
  return (
    <div className={styles.cardList}>
      <div className="pageSelector">
        <button>PREV</button>
        <span className="currentPage">{currentPage}</span>
        <button>NEXT</button>
      </div>

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
