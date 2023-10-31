const axios = require("axios");

const pokemonJsonFormatter = async (data) => {
  const { id, name, base_experience, height, weight, stats } = data;

  const statList = {}
  stats.forEach((e) => {
    e.stat.name = e.stat.name.replace(/-/g, "_") // remplaza los guiones medios por bajos
    statList[e.stat.name] = e.base_stat
  })

  const abilitiesList = [];
  data.abilities.forEach((e) => {
    abilitiesList.push({
      abilitie_name: e.ability.name,
      abilitie_slot: e.slot,
    });
  });

  const typeList = [];
  data.abilities.forEach((e) => {
    typeList.push({
      nombre_type: e.ability.name,
    });
  });
  
  const newPokemon = {
    pokemon_id: id,
    pokemon_name: name,
    pokemon_height: height,
    pokemon_weight: weight,
    pokemon_image: data.sprites.back_default,
    pokemon_basexp: base_experience,
    stats: statList,
    abilities: abilitiesList,
    pokemon_type: typeList,
  };
  return newPokemon;
};

const getPokemonFromApiById = async (id) => {
  const pokemon = await axios
    .get(`${process.env.API_DIR}/pokemon/${id}`)
    .then((response) => {
      const shapedData =  pokemonJsonFormatter(response.data)
      return shapedData;
    });
  return pokemon;
};

const getPokemonFromApiByNamed = async (name) => {
  const pokemon = await axios
  .get(`${process.env.API_DIR}/pokemon/${name}`)
  .then((response) => {
      console.log('pokemon')
      const shapedData =  pokemonJsonFormatter(response.data)
      return shapedData;
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
  getPokemonFromApiById,
  getPokemonFromApiByNamed,
  getTypesFromApi,
};
