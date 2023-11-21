import styles from "./card.module.css";

import { typeColors } from "../../utils/typeColors";
import { capitalize } from "../../utils/capitalize";
import { addZero } from "../../utils/addZero";
import { useEffect, useState } from "react";
import TypeIcons from "../TypeIcons/TypeIcons";
import { useDispatch } from "react-redux";
import { deletePokemonById } from "../../Redux/Actions/actions";

const Card = ({ pokemon, detailHandler }) => {
  const [cardColor, setCardColor] = useState();
  const [pType, setPtype] = useState();
 
  const [isLocal, setIsLocal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = () => {
      try {
        console.log(pokemon)
        const type = pokemon.PokemonTypes[0]?.nombre_type;
        const color = typeColors[type] || "gray";
        setPtype(type);
        setCardColor(color);
        pokemon.pokemon_isLocal && setIsLocal(true);
        
      } catch (error) {
        throw new Error(error)
      }
    }
    fetchData();
   
  }, [pokemon.PokemonTypes]);

  const deleteHandler = (id) => {
    dispatch(deletePokemonById(id));
  };


  return   (
    <div className={styles.pokemonCard} style={{ backgroundColor: cardColor }}>
      <div
        onClick={() => {
          detailHandler(pokemon.pokemon_id);
        }}
      >
        <h3>
          {pokemon.pokemon_name.length > 11
            ? pokemon.pokemon_name.slice(0, 11) + "..."
            : pokemon.pokemon_name.toUpperCase()}
        </h3>
        <p className={styles.id}>
          {pokemon.pokemon_id.length > 5
            ? pokemon.pokemon_id.slice(0, 5) + "..."
            : "#" + addZero(pokemon.pokemon_id)}
        </p>
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
        {isLocal ? (
          <span
            onClick={() => {
              deleteHandler(pokemon.pokemon_id);
            }}
            className={styles.deleteBtn}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" />
            </svg>
          </span>
        ) : (
          <></>
        )}
        <span className={styles.typeebg}>
          <TypeIcons type={pType} />
        </span>
      </div>
    </div>
  );
};

export default Card;
