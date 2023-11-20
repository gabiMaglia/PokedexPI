const {
  getPokemonTypeList,
} = require("../../controllers/pokemonControllers/typeController");

const getPokemonTypesHandler = async (req, res) => {
  try {
    const response = await getPokemonTypeList();
    return res.status(200).json({ taskIsCompleted: true, response: response });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getPokemonTypesHandler;
