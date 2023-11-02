const axios = require("axios");


const getAllPokemonsFromApi = async () => {
  const pokemons = await axios
    .get(`${process.env.API_DIR}/pokemon/?limit=999999`)
    .then((response) => {
      return response.data;
    });
  return pokemons;

}



const getPokemonFromApiById = async (id) => {
  const pokemon = await axios
    .get(`${process.env.API_DIR}/pokemon/${id}`)
    .then((response) => {
      return response.data
    });
  return pokemon;
};

const getPokemonFromApiByName = async (name) => {
  const pokemon = await axios
    .get(`${process.env.API_DIR}/pokemon/${name}`)
    .then((response) => {
      return response.data;
    });
  return pokemon;
};

const getTypesFromApi = async () => {
  const typesOfPokemons = await axios
    .get(`${process.env.API_DIR}/type`)
    .then((response) => {
      return response.data;
    });
  const arrayOfTypes = typesOfPokemons.results.map((e) => {
    return e.name;
  });
  return arrayOfTypes;
};

module.exports = {
  getAllPokemonsFromApi,
  getPokemonFromApiById,
  getPokemonFromApiByName,
  getTypesFromApi,
};
