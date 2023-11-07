import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardBoard from "../../components/CardBoard/CardBoard.componenet";
import {
  fetchAllPokemonTypes,
  fetchAllPokemon,
} from "../../Redux/Actions/actions";

import styles from "./home.module.css";
const HomePage = ({ detailHandler }) => {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const allPokemons = useSelector((state) => state.allPokemons);

  useEffect(() => {
    try {
      setLoading(true);
      if (allPokemons.length < 1) dispatch(fetchAllPokemon());
      if (allPokemons.length > 1) {
        setLoading(false);
      }
    } catch (error) {
      throw new Error(error);
    }
  }, [dispatch, allPokemons]);

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
