const {
  postNewPokemonToDb,
  getPokemonById,
  getPokemonByName,
  getAllPokemons,
  deletePokemonById,
} = require("../../controllers/pokemonControllers/pokemonControllers");

const getAllPokemonsHandler = async (req, res) => {
  try {
    const newPokemonList = await getAllPokemons();
    return res
      .status(200)
      .json({ taskIsCompleted: true, response: newPokemonList });
  } catch (error) {
    return res.status(500).json({ error: error.message, response:null });
  }
};
const getAllPokemonsBySeasonHandler = async (req, res) => {
  try {
    const limit = req.query.limit;
    const offset = req.query.offset;
    const newPokemonList = await getAllPokemons(limit, offset);
    return res
      .status(200)
      .json({ taskIsCompleted: true, response: newPokemonList });
  } catch (error) {
    return res.status(500).json({ error: error.message, response:null });
  }
};

const postPokemonHandler = async (req, res) => {
  try {
    const newPokemon = await postNewPokemonToDb(req.body);
    return res
      .status(200)
      .json({ taskIsCompleted: true, response: newPokemon });
  } catch (error) {
    return res.status(500).json({ error: error.message, response:null });
  }
};

const getPokemonByIdHandler = async (req, res) => {
  try {
    const id = req.params.id;
    const pokemon = await getPokemonById(id);

    if (pokemon === undefined) {
      return res.status(404).json({ error: "Pokémon not found" , response:null});
    }
    return res.status(200).json({ taskIsCompleted: true, response: pokemon });
  } catch (error) {
    return res.status(500).json({ error: error.message , response:null});
  }
};
const getPokemonByNameHandler = async (req, res) => {
  try {
    const name = req.query.name;
    const pokemon = await getPokemonByName(name);

    if (pokemon === undefined) {
      return res.status(404).json({ error: "Pokémon not found" , response:null});
    } else {
      return res.status(200).json({ taskIsCompleted: true, response: pokemon });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deletePokemonByIdHandler = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await deletePokemonById(id);

    if (response.error)
      return res
        .status(404)
        .json({ taskIsCompleted: false, response: response });
    else
      return res
        .status(200)
        .json({ taskIsCompleted: true, response: response });
  } catch (error) {
    return res.status(500).json({ error: error.message, response:null });
  }
};

module.exports = {
  getPokemonByIdHandler,
  getPokemonByNameHandler,
  postPokemonHandler,
  getAllPokemonsBySeasonHandler,
  getAllPokemonsHandler,
  deletePokemonByIdHandler,
};
