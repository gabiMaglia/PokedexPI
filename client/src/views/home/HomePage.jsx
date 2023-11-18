import { useDispatch } from "react-redux";

import PokeFilter from "../../components/PokeFilter/PokeFilter";
import NavButtons from "../../components/NavButtons/NavButtons";
import CardBoard from "../../components/CardBoard/CardBoard.componenet";

import { nextPage, prevPage } from "../../Redux/Actions/actions";

import styles from "./home.module.css";
const HomePage = ({ detailHandler, allPokemons }) => {
  const dispatch = useDispatch();

  const handleNextPage = () => {
    dispatch(nextPage());
  };
  const handlePrevPage = () => {
    dispatch(prevPage());
  };

  return (
    <section className={styles.homeContainer}>
      <CardBoard allPokemons={allPokemons} detailHandler={detailHandler} />
      <div className={styles.controls}>
   
        <NavButtons
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
        
        <span  className={styles.homeFiletr}>
          <PokeFilter />
        </span>
      </div>
    </section>
  );
};

export default HomePage;
