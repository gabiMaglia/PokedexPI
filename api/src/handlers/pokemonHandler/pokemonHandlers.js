const {
  postNewPokemonToDb,
  getPokemonById,
  getPokemonByName,
  getAllPokemons,
} = require("../../controllers/pokemonControllers/pokemonControllers");

const getAllPokemonsHandler = async (req, res) => {
  try {
    const newPokemonList = await getAllPokemons();
    return res.status(200).json(newPokemonList);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const getAllPokemonsBySeasonHandler = async (req, res) => {
  try {
    const limit = req.query.limit;
    const offset = req.query.offset;
    const newPokemonList = await getAllPokemons(limit, offset);
    return res.status(200).json(newPokemonList);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const postPokemonHandler = async (req, res) => {
  try {
    const newPokemon = await postNewPokemonToDb(req.body);
    return res.status(200).json(newPokemon);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getPokemonByIdHandler = async (req, res) => {
  try {
    const id = req.params.id;
    const pokemon = await getPokemonById(id);

    if (!pokemon) {
      return res.status(404).json({ error: "Pokémon not found" });
    }
    return res.status(200).json(pokemon);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const getPokemonByNameHandler = async (req, res) => {
  try {
    const name = req.query.name;
    const pokemon = await getPokemonByName(name);

    if (!pokemon) {
      return res.status(404).json({ error: "Pokémon not found" });
    } else {
      return res.status(200).json(pokemon);
    }
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = {
  getPokemonByIdHandler,
  getPokemonByNameHandler,
  postPokemonHandler,
  getAllPokemonsBySeasonHandler,
  getAllPokemonsHandler,
};
