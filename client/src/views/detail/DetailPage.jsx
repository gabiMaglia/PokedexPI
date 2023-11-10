import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import styles from "./detail.module.css";
import { useSelector } from "react-redux";

const DetailPage = ({ limit, offset }) => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState();
  const navigate = useNavigate();
  
  useEffect(() => {
    setPokemon(pokemonToShow);
    return () => {
      setPokemon("");
    };
  }, [id]);
  
  const pokemonsToslide = useSelector (state => state.allPokemonsBackup)
  
  const pokemonToShow = useSelector((state) =>
  state.allPokemonsBackup.find((pokemon) =>
  !isNaN(id)
  ? pokemon.pokemon_id === Number(id)
  : pokemon.pokemon_name === id
  )
  );
  
  const currentIndex = pokemonsToslide.indexOf(pokemon)
  console.log(currentIndex)
  const pokemonToSlideLength = pokemonsToslide.length
  // console.log(Number(pokemonsToslide[pokemonToSlideLength - 1].pokemon_id))

  
  const handleNextPrevDetail = (action) => {
    switch (action) {
      case "prev":
        if (currentIndex === 0) navigate(`/detail/${Number(pokemonsToslide[pokemonToSlideLength - 1].pokemon_id)}`);
        // if ((pokemonsToslide[currentIndex -1]) &&  isNaN(Number(pokemonsToslide[currentIndex -1].pokemon_id)))  navigate(`/detail/${pokemonsToslide[currentIndex - 1].pokemon_name}`);
        else  navigate(`/detail/${pokemonsToslide[currentIndex - 1].pokemon_id}`)
        

      // if (Number(id) - 1 > 0) navigate(`/detail/${Number(id) - 1}`);
      //   else navigate(`/detail/${limit}`);
        break;
      case "next":
        // if (pokemonsToslide[currentIndex + 1].pokemon_id !== limit && !isNaN(pokemonsToslide[currentIndex + 1].pokemon_id)) navigate(`/detail/${pokemonsToslide[0].name}`);
        if (pokemonsToslide[currentIndex].pokemon_id == limit && !isNaN(pokemonsToslide[0].pokemon_id)) navigate(`/detail/${pokemonsToslide[0].pokemon_id}`);
        // if (pokemonsToslide[currentIndex].pokemon_id == limit && !isNaN(pokemonsToslide[currentIndex + 1].pokemon_id)) navigate(`/detail/${pokemonsToslide[0].pokemon_name}`);
        else navigate(`/detail/${pokemonsToslide[currentIndex + 1].pokemon_id}`)
        
        // if (Number(id) + 1 < `${limit + 1}`)
        //   navigate(`/detail/${Number(id) + 1}`);
        // else navigate(`/detail/${offset + 1}`);
        break;
      default:
        break;
    }
  };



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
