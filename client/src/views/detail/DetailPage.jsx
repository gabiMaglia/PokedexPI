import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import styles from "./detail.module.css";
import { fetchPokemonService } from "../../services/pokemonServices";

const DetailPage = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState();
  const navigate = useNavigate();

  const handleNextPrevDetail = (action) => {
    switch (action) {
      case "prev":
        if (Number(id) - 1 > 0) navigate(`/detail/${Number(id) - 1}`);
        else navigate(`/detail/1017`)
        break;

      case "next":
       if (Number(id) + 1 < 1017) navigate(`/detail/${Number(id) + 1}`);
       else navigate(`/detail/1`)
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    try {
      fetchPokemonService(id).then((data) => {
        setPokemon(data);
      });
    } catch (error) {
      throw new Error(error);
    }
    return () => {
      setPokemon("");
    };
  }, [id]);
  
  
  
  return (
    <div>
      {!pokemon ? (
        <>
          <h1>Loading</h1>
        </>
      ) : (
        <>
          <button
            onClick={() => {
              handleNextPrevDetail("prev");
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
              handleNextPrevDetail("next");
            }}
          >
            Next
          </button>

            
          <section className={styles.detailCard}>
            <label htmlFor="id">Id:</label>
            <p id="id">{pokemon?.pokemon_id}</p>
            <h1>{pokemon?.pokemon_name}</h1>
            <img src={pokemon?.pokemon_image} alt={pokemon?.pokemon_name} />
            <div className={styles.statBox}>
              <label htmlFor="vida">Vida:</label>
              <p>{pokemon?.PokemonStatPoint.hp}</p>
              <label htmlFor="ataque">Ataque:</label>
              <p>{pokemon?.PokemonStatPoint.attack}</p>
              <label htmlFor="defensa">Defensa:</label>
              <p>{pokemon?.PokemonStatPoint.defence}</p>
              <label htmlFor="vida">Ataque Especial:</label>
              <p>{pokemon?.PokemonStatPoint.special_attack}</p>
              <label htmlFor="vida">Defensa Especial:</label>
              <p>{pokemon?.PokemonStatPoint.special_defense}</p>
              <label htmlFor="velocidad">Velocidad:</label>
              <p>{pokemon?.PokemonStatPoint.speed}</p>
            </div>
            <div>
              <label htmlFor="peso">Peso:</label>
              <p>{pokemon?.pokemon_weight}</p>
              <label htmlFor="altura">Altura:</label>
              <p>{pokemon?.pokemon_height}</p>
            </div>
            <div className={styles.types}>
              {pokemon?.PokemonTypes.map((e, key) => {
                return <p key={key}> {e.nombre_type} </p>;
              })}
            </div>
            <div className={styles.abilities}>
              {pokemon?.PokemonAbilities.map((e, key) => {
                return <p key={key}> {e.abilitie_name} </p>;
              })}
            </div>
          </section>
        </>
      )}
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        Go Home
      </button>
    </div>
  );
};

export default DetailPage;
