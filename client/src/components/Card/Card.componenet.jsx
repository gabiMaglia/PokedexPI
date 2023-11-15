import styles from "./card.module.css";

import { typeColors } from "../../utils/typeColors";
import { capitalize } from "../../utils/capitalize";
import { useEffect, useState } from "react";

const Card = ({ pokemon, detailHandler }) => {

  const [cardColor, setCardColor] = useState()

  useEffect(() => {
    const type = pokemon.PokemonTypes[0] .nombre_type;
    const color = typeColors[type] || "gray";
    setCardColor(color)
  
  }, [pokemon.PokemonTypes])

  return (
    <div
      className={styles.pokemonCard}
      onClick={() => {
        detailHandler(pokemon.pokemon_id);
      }}
      style={{ backgroundColor: cardColor }}
    >
      <h1>{pokemon.pokemon_name}</h1>
      <img
        src={
          pokemon.pokemon_image.thumbnail
            ? pokemon.pokemon_image.thumbnail
            : pokemon.pokemon_image
        }
        alt={pokemon.pokemon_name}
      />
      <div className={styles.pokemonType}>
        {pokemon.PokemonTypes.map((type, key) => (
          <p key={key}>{capitalize(type.nombre_type)}</p>
        ))}
      </div>
    </div>
  );
};

export default Card;
