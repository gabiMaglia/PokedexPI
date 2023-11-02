const {
  Pokemon,
  PokemonStatPoints,
  PokemonAbilities,
  PokemonTypes,
} = require("../../db");

const { boundTypeToPokemon } = require("./typeController");
const createNewPokemonBaseStatus = require("./baseStatusController");
const createNewPokemonAbilities = require("./abilitiesController");

const {
  getPokemonFromApiById,
  getPokemonFromApiByName,
} = require("../api_controllers/apiCallController");


const getAllPokemons = () => {

}

const getPokemonById = async (id) => {
  if (!isNaN(id)) {
    const pokemon = await getPokemonFromApiById(id);
    return pokemon;
  }
  const pokemon = await Pokemon.findByPk(id, {
    include: [PokemonStatPoints, PokemonAbilities, PokemonTypes],
  });
  return pokemon;
};

const getPokemonByName = async (name) => {
  const pokemon = await Pokemon.findOne({
    where: { pokemon_name: name },
    include: [PokemonStatPoints, PokemonAbilities, PokemonTypes],
  });
  if (!pokemon) {
    const pokemon = await getPokemonFromApiByName(name);
    return pokemon;
  }
  // console.log(pokemon);
  return pokemon;
};

const postNewPokemonToDb = async (data) => {
  console.log(data.PokemonStatPoint)
  const {
    pokemon_name,
    pokemon_height,
    pokemon_weight,
    pokemon_image,
    pokemon_basexp,
  } = data;

  const newPokemon = await Pokemon.create({
    pokemon_name,
    pokemon_height,
    pokemon_weight,
    pokemon_image,
    pokemon_basexp,
  });

  const newPokemonStatPoints = await createNewPokemonBaseStatus(
    newPokemon,
    data.PokemonStatPoint
  );

  const newPokemonAbilities = await createNewPokemonAbilities(
    PokemonAbilities,
    data.PokemonAbilities
  );

  const newPokemonTypes = await boundTypeToPokemon(
    PokemonTypes,
    data.PokemonTypes
  );
  
  for (const ability of newPokemonAbilities) {
    await newPokemon.addPokemonAbilities(ability);
  }

  for (const type of newPokemonTypes) {
    await newPokemon.addPokemonType(type);
  }

  newPokemonStatPoints.pokemon_stats_id = newPokemon.id;

  await newPokemonStatPoints.save();

  // console.log(newPokemonTypes);
  return newPokemon;
};

module.exports = { postNewPokemonToDb, getPokemonById, getPokemonByName };
