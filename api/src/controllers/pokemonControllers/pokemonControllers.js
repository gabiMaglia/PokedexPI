const {
  Pokemon,
  PokemonStatPoints,
  PokemonAbilities,
  PokemonTypes,
} = require("../../db");

const { boundTypeToPokemon } = require("./typeController");
const createNewPokemonBaseStatus = require("./baseStatusController");
const createNewPokemonAbilities = require("./abilitiesController");
const { pokemonJsonFormatter } = require("../../utils/pokemonJsonFormatter");

const {
  getAllPokemonsFromApi,
  getPokemonFromApiById,
  getPokemonFromApiByName,
} = require("../api_controllers/apiCallController");

// const getAllPokemonNames = async () => {
//   const {results} = await getAllPokemonsFromApi();
//   const arrayOfNames = results.map(e => e.name )
//   return arrayOfNames
// }

const getAllPokemons = async () => {
  const dbPokemons = await Pokemon.findAll({
    include: [PokemonStatPoints, PokemonAbilities, PokemonTypes],
  });
  //  pedimos todos los pokemons a la api y hacemos destructuring para quedarnos con el objeto
  // results donde se encuentra el nombre y la url
  const { results } = await getAllPokemonsFromApi();
  // usamos el metodo all del objeto promise para manejar multiples llamados a la api
  // de manera simultanea para obtener en base al id de cada pokemon el detalle de cada uno,
  // use id porque demora la mitad que la busqueda por nombre de la misma manera que use
  // Promise.all en vez de reduce por las mismas razons, demora literal la mitad   // esto se debe a que reduce resuelve cada peticion de forma secuencial mientras que promise.all los hace desde el event loop por lo que tengo entendido
  const completeData = await Promise.all(
    results.map(async (pokemon) => {
      const response = await getPokemonFromApiById(pokemon.url.split("/")[6]);
      const parsedPokemon = pokemonJsonFormatter(response);
      return parsedPokemon;
    })
  );

  return { ...dbPokemons, ...completeData };
};

const getPokemonById = async (id) => {
  if (!isNaN(id)) {
    const pokemon = await getPokemonFromApiById(id);
    const parsedPokemon = pokemonJsonFormatter(pokemon);
    return parsedPokemon;
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
    const parsedPokemon = pokemonJsonFormatter(pokemon);
    return parsedPokemon;
  }
  // console.log(pokemon);
  return pokemon;
};

const postNewPokemonToDb = async (data) => {
  console.log(data.PokemonStatPoint);
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

module.exports = {
  postNewPokemonToDb,
  getPokemonById,
  getPokemonByName,
  getAllPokemons,
};
