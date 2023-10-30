const axios = require("axios");

const pokemonForDatabaseBuilder = async (data) => {

  const { id, name, base_experience, height, weight } = data;
  const stats = data.stats;
  
  const evolutionChain = await getEvolutionChainFromApi(id);
  
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
    pokemon_evolitions: evolutionChain,
    pokemon_isLocal: true,
    
    bstat_life: stats[0].base_stat,
    bstat_attack: stats[1].base_stat,
    bstat_defense: stats[2].base_stat,
    bstat_special_attack: stats[3].base_stat,
    bstat_special_defense: stats[4].base_stat,
    bstat_speed: stats[5].base_stat,
    
    
    abilities: abilitiesList,
  
    pokemon_type: typeList,
  };
  return newPokemon;
};

const extractEvolutions = (pokemonEvolutions) => {
  const evolutions = [];
  if (pokemonEvolutions.chain.evolves_to.length > 0) {
    for (const evolution of pokemonEvolutions.chain.evolves_to) {
      const evolutionObject = {
        name: evolution.species.name,
        level: evolution.evolution_details[0].min_level
      };

      evolutions.push(evolutionObject);
    }
  }

  return evolutions;
};

const getEvolutionChainFromApi = async (pokemonId) => {
  const evolutionChain = await axios
  .get(`${process.env.API_DIR}/evolution-chain/${pokemonId}`)
  .then((response) => {
    return extractEvolutions(response.data)
  })
  return evolutionChain
}

const getPokemonFromApiById = async (id) => {
  const pokemon = await axios
    .get(`${process.env.API_DIR}/pokemon/${id}`)
    .then((response) => {

      const shapedMon =  pokemonForDatabaseBuilder(response.data)
      return shapedMon;
    });
  return pokemon;
};
const getPokemonFromApiByNamed = async (name) => {
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
  getPokemonFromApiById,
  getPokemonFromApiByNamed,
  getTypesFromApi,
};
