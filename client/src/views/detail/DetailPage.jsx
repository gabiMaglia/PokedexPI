import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import styles from "./detail.module.css";
import { useSelector } from "react-redux";

const DetailPage = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setPokemon(pokemonToShow);
    console.log(pokemonToShow);
    return () => {
      setPokemon("");
    };
  }, [id]);

  const pokemonsToSlide = useSelector((state) => state.allPokemonList);

  const pokemonToShow = useSelector((state) =>
    state.AllPokemonBackupList.find((pokemon) =>
      !isNaN(Number(id))
        ? pokemon.pokemon_id === Number(id)
        : pokemon.pokemon_id === id
    )
  );
  const currentIndex = pokemonsToSlide.indexOf(pokemon);
  const pokemonToSlideLength = pokemonsToSlide.length;

  const handlePrevDetail = () => {
    if (currentIndex === 0)
      navigate(
        `/detail/${pokemonsToSlide[pokemonToSlideLength - 1].pokemon_id}`
      );
    else navigate(`/detail/${pokemonsToSlide[currentIndex - 1].pokemon_id}`);
  };

  const handleNextDetail = () => {
    if (currentIndex === pokemonToSlideLength - 1)
      navigate(`/detail/${pokemonsToSlide[0].pokemon_id}`);
    else navigate(`/detail/${pokemonsToSlide[currentIndex + 1].pokemon_id}`);
  };

  return (
    <div>
      <button onClick={handlePrevDetail}>Prev</button>
      <button onClick={handleNextDetail}>Next</button>
      {!pokemon ? (
        <>
          <h1>Loading</h1>
        </>
      ) : (
        <>
          <section className={styles.detailCard}>
            <label htmlFor="id">Id:</label>
            <p id="id">{pokemon?.pokemon_id}</p>
            <h1>{pokemon?.pokemon_name}</h1>
            <img
              src={pokemon?.pokemon_image.mainPic? pokemon?.pokemon_image.mainPic : pokemon?.pokemon_image }
              alt={pokemon?.pokemon_name}
            />
            <div className={styles.statBox}>
              <label htmlFor="vida">Vida:</label>
              <p>{pokemon?.PokemonStatPoint.hp}</p>
              <label htmlFor="ataque">Ataque:</label>
              <p>{pokemon?.PokemonStatPoint.attack}</p>
              <label htmlFor="defensa">Defensa:</label>
              <p>{pokemon?.PokemonStatPoint.defense}</p>
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
