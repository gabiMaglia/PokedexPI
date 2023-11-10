import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card.componenet";
import styles from "./cardBoard.module.css";
import { nextPage, prevPage } from "../../Redux/Actions/actions";


const CardBoard = ({  detailHandler }) => {
  const dispatch = useDispatch()
  const currentPage = useSelector(state => state.currentPage)
  const allPokemons = useSelector(state => state.allPokemons)

  const handleNextPage = () => {
    dispatch(nextPage())
  }
  
  const handlePrevPage = () => {
    dispatch(prevPage())
  }

  return (
    <div className={styles.cardList}>
      <div className="pageSelector">
        <button onClick={handlePrevPage}>PREV</button>
        <span className="currentPage">{currentPage + 1}</span>
        <button onClick={(handleNextPage)}>NEXT</button>
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
