import styles from "./card.module.css";

const Card = ({ pokemon, detailHandler }) => {
  return (
    <div
      className={styles.pokemonCardContainer}
      onClick={() => {
        detailHandler(pokemon.pokemon_id);
      }}
    >
      <h1>{pokemon.pokemon_name}</h1>
      <img src={pokemon.pokemon_image} alt={pokemon.pokemon_name} />
      <div className={styles.pokemonType}>
        {pokemon.PokemonTypes?.map((type, key) => (
          <p key={key}>{type.nombre_type}</p>
        ))}
      </div>
    </div>
  );
};

export default Card;
