const createNewPokemonEffortStatus = async (newPokemon, data) => {
  const {
    effort_life,
    effort_attack,
    effort_defense,
    effort_speed,
    effort_height,
    effort_weight,
  } = data; //EFFORT STATUS
    const newPokemonEffortStatus =  await newPokemon.createPokemonEffortStatus({
    effort_life,
    effort_attack,
    effort_defense,
    effort_speed,
    effort_height,
    effort_weight,
  });
  return newPokemonEffortStatus
};

module.exports = createNewPokemonEffortStatus;
