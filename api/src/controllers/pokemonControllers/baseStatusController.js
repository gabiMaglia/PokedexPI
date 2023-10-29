const createNewPokemonBaseStatus = async (newPokemon, data) => {
  const {
    bstat_life,
    bstat_attack,
    bstat_defense,
    bstat_speed,
    bstat_height,
    bstat_weight,
  } = data; //BASE STATUS
  const newPokemonBaseStatus = await newPokemon.createPokemonBaseStatus({
    bstat_life,
    bstat_attack,
    bstat_defense,
    bstat_speed,
    bstat_height,
    bstat_weight,
  });

  return newPokemonBaseStatus;
};

module.exports = createNewPokemonBaseStatus;
