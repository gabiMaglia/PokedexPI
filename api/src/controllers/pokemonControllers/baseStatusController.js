const createNewPokemonBaseStatus = async (newPokemon, data) => {
  const {
    bstat_life,
    bstat_attack,
    bstat_defense,
    bstat_special_attack,
    bstat_special_defense,
    bstat_speed,
  } = data; //BASE STATUS
  const newPokemonBaseStatus = await newPokemon.createPokemonBaseStatus({
    bstat_life,
    bstat_attack,
    bstat_defense,
    bstat_special_attack,
    bstat_special_defense,
    bstat_speed,
  });

  return newPokemonBaseStatus;
};

module.exports = createNewPokemonBaseStatus;
