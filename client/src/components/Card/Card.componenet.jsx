import styles from "./card.module.css";

import { typeColors } from "../../utils/typeColors";
import { capitalize } from "../../utils/capitalize";
import { addZero } from "../../utils/addZero";
import { useEffect, useState } from "react";

const Card = ({ pokemon, detailHandler }) => {

  const [cardColor, setCardColor] = useState()

  useEffect(() => {
    const type = pokemon.PokemonTypes[0].nombre_type;
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
      
      <div>
        <h3>{pokemon.pokemon_name.length > 11? pokemon.pokemon_name.slice(0, 11) + '...' :pokemon.pokemon_name}</h3>
          <p className={styles.id}>{ pokemon.pokemon_id.length > 5? pokemon.pokemon_id.slice(0, 5) + '...' :'#'+addZero(pokemon.pokemon_id)}</p>
      </div>
      
      <div>
        <span className={styles.pokemonType}>
          {pokemon.PokemonTypes.slice(0, 2).map((type, key) => (
            <p key={key}>{capitalize(type.nombre_type)}</p>
          ))}
        </span>
        <img
          src={
            pokemon.pokemon_image.thumbnail
              ? pokemon.pokemon_image.thumbnail
              : pokemon.pokemon_image
          }
          alt={pokemon.pokemon_name}
        />
        
      </div>

      
    </div>
  );
};

export default Card;
