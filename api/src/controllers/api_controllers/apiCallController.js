const axios = require("axios");

const pokemonForDatabaseBuilder = (data) => {
    const evolutionChain = data.evolutions.chain.evolves_to.map(e => e.species)
    const {id, name, base_experience, height, weight} = data 
    const  stats  = data.stats
    const {move_name,move_type, move_power, move_accuarcy }= data.PokemonMoves
    const {abilitie_name,abilitie_base_level, abilitie_slot }= data.PokemonAbilities
    


    return {
    pokemon_id: id,
    pokemon_name: name,
    pokemon_height: height,
    pokemon_weight: weight,
    pokemon_image: sprites.back_default,
    pokemon_basexp: base_experience,
    pokemon_evolitions: evolutionChain ,
    pokemon_isLocal: true,

    bstat_life: stats[0].stat.name,
    bstat_attack: stats[1].stat.name ,
    bstat_defense: stats[2].stat.name,
    bstat_special_attack: stats[3].stat.name,
    bstat_special_defense: stats[4].stat.name,
    bstat_speed: stats[5].stat.name,


    move_name,
    move_type,
    move_power,
    move_accuarcy,

    abilitie_name,
    abilitie_base_level,
    abilitie_slot,

    pokemon_type: data.PokemonTypes,
  };
};

const getPokemonFromApiById = async (id) => {
 const pokemon = await axios
  .get(`${process.env.API_DIR}/pokemon/${id}`)
  .then((response) => {
    return response.data
  })
 return pokemon
};
const getPokemonFromApiByNamed = async (name) => {
  const pokemon = await axios
  .get(`${process.env.API_DIR}/pokemon/${name}`)
  .then((response) => {
    return response.data
  })
 return pokemon
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
