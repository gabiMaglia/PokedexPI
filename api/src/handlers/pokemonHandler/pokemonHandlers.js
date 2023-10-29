const {
  postNewPokemonToDb,
  getPokemonById,
  getPokemonByName
} = require("../../controllers/pokemonControllers/pokemonControllers");
const {
  getPokemonFromApiById,
  getPokemonFromApiByNamed,
} = require("../../controllers/api_controllers/apiCallController");

const postPokemonHandler = async (req, res) => {
  try {
    const newPokemon = await postNewPokemonToDb(req.body);
    res.status(200).json(newPokemon);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getPokemonByIdHandler = async (req, res) => {
  try {
    const id = req.params.id;
    let pokemon = await getPokemonById(id);
    if (!pokemon) {
      pokemon = await getPokemonFromApiById(id);
      if (!pokemon) {
        return res.status(404).json({ message: "Pokémon not found" });
      }
    }
    res.status(200).json(pokemon);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
const getPokemonByNameHandler = async (req, res) => {
  try {
    const name = req.query.name;
    let pokemon = await getPokemonByName(name);
    if (!pokemon) {
      pokemon = await getPokemonFromApiByNamed(name);
      if (!pokemon) {
        return res.status(404).json({ message: "Pokémon not found" });
      }
    }
    res.status(200).json(pokemon);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  getPokemonByIdHandler,
  getPokemonByNameHandler,
  postPokemonHandler,
};
