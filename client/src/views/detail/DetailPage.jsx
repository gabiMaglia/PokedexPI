import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import styles from "./detail.module.css";
import { useSelector } from "react-redux";
import AnimatedBackground from "../../components/common/AnimatedBackground";

const DetailPage = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState();
  const navigate = useNavigate();
  const pokemonsToSlide = useSelector((state) => state.allPokemonList);
  const pokemonToShow = useSelector((state) =>
    state.AllPokemonBackupList.find((pokemon) =>
      !isNaN(Number(id))
        ? pokemon.pokemon_id === Number(id)
        : pokemon.pokemon_id === id
    )
  );

  useEffect(() => {
    setPokemon(pokemonToShow);

    return () => {
      setPokemon("");
    };
  }, [id, pokemonToShow]);

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
      <AnimatedBackground />
      <button onClick={handlePrevDetail}>
     
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 512 512"
        >
          <path d="M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3V256v41.7L459.5 440.6zM256 352V256 128 96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V352z" />
        </svg>
      </button>
      <button onClick={handleNextDetail}>
    
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 512 512"
        >
          <path d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4L224 214.3V256v41.7L52.5 440.6zM256 352V256 128 96c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4l192 160c7.3 6.1 11.5 15.1 11.5 24.6s-4.2 18.5-11.5 24.6l-192 160c-9.5 7.9-22.8 9.7-34.1 4.4s-18.4-16.6-18.4-29V352z" />
        </svg>
      </button>
      {!pokemon ? (
        <>
          <h1>Loading</h1>
        </>
      ) : (
        <>
          <section className={styles.detailCard}>
            <div className={styles.col1}>
              <label htmlFor="id">Id:</label>
              <p id="id">{pokemon?.pokemon_id}</p>
              <label htmlFor="peso">Peso:</label>
              <p>{pokemon?.pokemon_weight}</p>
              <label htmlFor="altura">Altura:</label>
              <p>{pokemon?.pokemon_height}</p>
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
            </div>

            <div className={styles.col2}>
              <h1>{pokemon?.pokemon_name}</h1>
              <img
                src={
                  pokemon?.pokemon_image.mainPic
                    ? pokemon?.pokemon_image.mainPic
                    : pokemon?.pokemon_image
                }
                alt={pokemon?.pokemon_name}
              />
            </div>

            <div className={styles.col3}>
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
