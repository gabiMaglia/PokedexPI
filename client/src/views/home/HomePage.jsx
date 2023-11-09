import { useState } from "react";
import CardBoard from "../../components/CardBoard/CardBoard.componenet";


import styles from "./home.module.css";
const HomePage = ({ detailHandler, allPokemons }) => {
  const [loading, setLoading] = useState(false);

  return (
    <section className={styles.homeContainer}>
      {loading ? (
        <>
          <h1>LOADING</h1>
        </>
      ) : (
        <CardBoard allPokemons={allPokemons} detailHandler={detailHandler} />
      )}
    </section>
  );
};

export default HomePage;
