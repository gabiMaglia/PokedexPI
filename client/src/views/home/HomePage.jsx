import { useState } from "react";
import CardBoard from "../../components/CardBoard/CardBoard.componenet";


import styles from "./home.module.css";
const HomePage = ({ detailHandler, allPokemons }) => {
 

  return (
    <section className={styles.homeContainer}>
        <CardBoard allPokemons={allPokemons} detailHandler={detailHandler} />
    </section>
  );
};

export default HomePage;
