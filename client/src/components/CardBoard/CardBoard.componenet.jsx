import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card.componenet";
import styles from "./cardBoard.module.css";
import {
  nextPage,
  prevPage,
} from "../../Redux/Actions/actions";

import PokeFilter from "../PokeFilter/PokeFilter";
import NavButtons from "../NavButtons/NavButtons";
import { useEffect, useState } from "react";


const CardBoard = ({ detailHandler, allPokemons }) => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.currentPage);
  const [page, setPage] = useState()
  useEffect(() => {
  setPage(currentPage)
  }, [currentPage])

  const handleNextPage = () => {
    dispatch(nextPage());
  };
  const handlePrevPage = () => {
    dispatch(prevPage());
  };
  return (
    <section className={`${styles.cardBoard}`}>

      <PokeFilter  />
      <NavButtons handlePrevPage={handlePrevPage} handleNextPage={handleNextPage} currentPage={page} />
   
    <div className={styles.cardList}>

      {allPokemons.map((pokemon, key) => {
        return (
          <Card key={key} pokemon={pokemon} detailHandler={detailHandler}/>
        );
      })}
    </div>
    </section>
  );
};

export default CardBoard;
