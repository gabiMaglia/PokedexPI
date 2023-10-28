const { PokemonTypes } = require("../../db");

const axios = require("axios");

const apiCall = async () => {
  try {
    const typesOfPokemons = await axios
      .get(`${process.env.API_DIR}/type`)
      .then((response) => {
        return response.data;
      });
    const arrayOfTypes = typesOfPokemons.results.map((e) => {
      return e.name;
    });
    return arrayOfTypes;
  } catch (error) {
    return error.message;
  }
};
const postPokemonTypes = async (data) => {
    try {
      data.map((e) =>
        PokemonTypes.create({
          nombre_type: e,
        })
      );
    } catch (error) {
      res.status(500).json(error.message);
    }
  };

const getPokemonTypeHandler = async (req, res) => {
  try {
    let response = await PokemonTypes.findAll();
    if (response.length < 1) {
      response = await apiCall();
      postPokemonTypes(response);
    }

    return res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  getPokemonTypeHandler,
};
