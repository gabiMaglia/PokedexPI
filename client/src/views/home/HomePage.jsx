import { useDispatch, useSelector } from "react-redux";

import PokeFilter from "../../components/PokeFilter/PokeFilter";
import NavButtons from "../../components/NavButtons/NavButtons";
import CardBoard from "../../components/CardBoard/CardBoard.componenet";

import AnimatedBackground from "../../components/common/AnimatedBackground";
import styles from "./home.module.css";
const HomePage = ({ detailHandler, deleteHandler, allPokemons }) => {


  return (
    <section className={styles.homeContainer}>
      <AnimatedBackground />
      <CardBoard allPokemons={allPokemons} deleteHandler={deleteHandler} detailHandler={detailHandler} />
      <div className={styles.controls}>
        <NavButtons />
        <span className={styles.homeFiletr}>
          <PokeFilter />
        </span>
      </div>
    </section>
  );
};

export default HomePage;
