const axios = require("axios");

const pokemonForDatabaseBuilder = (data) => {
    const evolutionChain = data.evolutions.chain.evolves_to.map(e => e.species)
    const {id, name, base_experience, height, weight} = data 

  return {
    pokemon_id: id,
    pokemon_name: name,
    pokemon_height: height,
    pokemon_weight: weight,
    pokemon_image: sprites.back_default,
    pokemon_basexp: base_experience,
    pokemon_evolitions: evolutionChain ,
    pokemon_isLocal: true,

    bstat_life: 100,
    bstat_attack: 120,
    bstat_defense: 20,
    bstat_special_attack: 120,
    bstat_special_defense: 20,
    bstat_speed: 130,


    move_name: "sulfatus",
    move_type: "air",
    move_power: 10,
    move_accuarcy: 8,

    abilitie_name: "sulfatus",
    abilitie_base_level: 10,
    abilitie_slot: 1,

    pokemon_type: "normal",
  };
};

const getPokemonFromApiByIdHandler = async (req, res) => {};

const getPokemonFromApiBNamedHandler = async (req, res) => {};

module.exports = {
  getPokemonFromApiByIdHandler,
  getPokemonFromApiBNamedHandler,
};
