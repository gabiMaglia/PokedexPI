const createNewPokemonBaseStatus = async (newPokemon, data) => {
  const { hp, attack, defense, special_attack, special_defense, speed } = data;

  const newPokemonStatPoints = await newPokemon.createPokemonStatPoint({
    pokemon_stats_hp: hp,
    pokemon_stats_attack: attack,
    pokemon_stats_defense: defense,
    pokemon_stats_special_attack: special_attack,
    pokemon_stats_special_defense: special_defense,
    pokemon_stats_speed: speed,
  });

  return newPokemonStatPoints;
};

module.exports = createNewPokemonBaseStatus;
