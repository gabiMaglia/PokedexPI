import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import styles from "./detail.module.css";
import { useSelector } from "react-redux";
import AnimatedBackground from "../../components/common/AnimatedBackground";
import NavBtn from "../../components/common/NavBtn ";
import PageLabel from "../../components/common/pageLabel";
import { typeColors } from "../../utils/typeColors";

const DetailPage = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState();
  const [imageLoaded, setImageLoaded] = useState(false);
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

  const handlePrevDetail = () => 
  {
    setImageLoaded(false)
    if (currentIndex === 0)
    navigate(
  `/detail/${pokemonsToSlide[pokemonToSlideLength - 1].pokemon_id}`
  );
  else navigate(`/detail/${pokemonsToSlide[currentIndex - 1].pokemon_id}`);
};

const handleNextDetail = () => {
  setImageLoaded(false)
  if (currentIndex === pokemonToSlideLength - 1)
      navigate(`/detail/${pokemonsToSlide[0].pokemon_id}`);
    else navigate(`/detail/${pokemonsToSlide[currentIndex + 1].pokemon_id}`);
  };

  return (
    <div className={styles.detailCardCont}>
      <AnimatedBackground />
      <div style={{display:"flex"}}>
        <span onClick={handlePrevDetail}>
          <NavBtn
            content={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path d="M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3V256v41.7L459.5 440.6zM256 352V256 128 96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V352z" />
              </svg>
            }
          />
        </span>
        <span onClick={handleNextDetail}>
          <NavBtn
            content={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4L224 214.3V256v41.7L52.5 440.6zM256 352V256 128 96c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4l192 160c7.3 6.1 11.5 15.1 11.5 24.6s-4.2 18.5-11.5 24.6l-192 160c-9.5 7.9-22.8 9.7-34.1 4.4s-18.4-16.6-18.4-29V352z" />
              </svg>
            }
          />
        </span>
      </div>
      {pokemon === undefined ? (
        <>
          <h1>Loading</h1>
        </>
      ) : (
        <>
          <section className={styles.detailCard}>
            <div className={styles.col1}>
              <div>
                <PageLabel content={`id: ${pokemon?.pokemon_id}`} />
                <div>
                  <PageLabel content={`Peso: ${pokemon?.pokemon_weight}`} />
                  <PageLabel content={`Altura: ${pokemon?.pokemon_height}`} />
                </div>
              </div>
              <div>
                <PageLabel content={`Types:`} />
                <div
                  style={{
          
                    backgroundColor: `${
                      typeColors[pokemon.PokemonTypes[0].nombre_type]
                    }`,
                  }}
                  className={styles.types}
                >
                  {pokemon?.PokemonTypes.map((e, key) => {
                    return <p key={key}> {e.nombre_type} </p>;
                  })}
                </div>
                <div className={styles.abilities}>
                  <PageLabel content={`Abilities:`} />
                  {pokemon?.PokemonAbilities.map((e, key) => {
                    return <p key={key}> {e.abilitie_name} </p>;
                  })}
                </div>
              </div>
            </div>

            <div className={styles.col2}>
              <h2>{pokemon?.pokemon_name}</h2>
              <img
               className={`${styles.pokemonImage} ${
                imageLoaded ? styles.fadeIn : styles.fadeOut
              }`}
                src={
                  pokemon?.pokemon_image.mainPic
                    ? pokemon?.pokemon_image.mainPic
                    : pokemon?.pokemon_image
                }
                onLoad={()=> {
                  setImageLoaded(true)
                }}
                alt={pokemon?.pokemon_name}
              />
            </div>

            <div className={styles.col3}>
              <div>
                <PageLabel content={`Vida: ${pokemon?.PokemonStatPoint.hp}`} />
                <PageLabel
                  content={`Velocidad: ${pokemon?.PokemonStatPoint.speed}`}
                />
              </div>
              <div>
                <PageLabel
                  content={`Ataque: ${pokemon?.PokemonStatPoint.attack}`}
                />
                <PageLabel
                  content={`Defensa: ${pokemon?.PokemonStatPoint.defense}`}
                />
              </div>
              <div>
                <PageLabel
                  content={`Ataque Especial: ${pokemon?.PokemonStatPoint.special_defense}`}
                />
                <PageLabel
                  content={`Defensa Especial: ${pokemon?.PokemonStatPoint.special_attack}`}
                />
              </div>
            </div>
          </section>
        </>
      )}
      <span
        onClick={() => {
          navigate("/home");
        }}
      >
        <NavBtn content={"Go Home"} />
      </span>
    </div>
  );
};

export default DetailPage;
