const createNewPokemonBaseStatus = async (newPokemon, data) => {
  const { hp, attack, defense, special_attack, special_defense, speed } = data;

  const newPokemonStatPoints = await newPokemon.createPokemonStatPoint({
    hp: hp,
    attack: attack,
    defense: defense,
    special_attack: special_attack,
    special_defense: special_defense,
    speed: speed,
  });

  return newPokemonStatPoints;
};

module.exports = createNewPokemonBaseStatus;
