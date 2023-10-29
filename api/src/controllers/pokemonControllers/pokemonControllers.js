const {
  Pokemon,
  PokemonBaseStatus,
  PokemonMoves,
  PokemonAbilities,
  PokemonTypes,
} = require("../../db");

const {getPokemonTypeList} = require ('./typeController')
const createNewPokemonBaseStatus = require("./baseStatusController");
const createNewPokemonMoves = require("./movesController");
const createNewPokemonAbilities = require("./abilitiesController");

const getPokemonById = async (id) => {
  const pokemon = await Pokemon.findByPk(id, {
    include: [PokemonBaseStatus, PokemonMoves, PokemonAbilities, PokemonTypes],
  });
  return pokemon;
};
const getPokemonByName = async (name) => {
  const pokemon = await Pokemon.findOne({where: { pokemon_name : name  }}, {
    include: [PokemonBaseStatus, PokemonMoves, PokemonAbilities, PokemonTypes],
  });
  return pokemon;
};

const postNewPokemonToDb = async (data) => {
    const {
      pokemon_id,
      pokemon_name,
      pokemon_height,
      pokemon_weight,
      pokemon_image,
      pokemon_basexp,
      pokemon_evolitions,
      pokemon_isLocal,
      pokemon_type,
    } = data;

    const newPokemon = await Pokemon.create({
      pokemon_id,
      pokemon_name,
      pokemon_height,
      pokemon_weight,
      pokemon_image,
      pokemon_basexp,
      pokemon_evolitions,
      pokemon_isLocal,
    });

    const newPokemonBaseStatus = await createNewPokemonBaseStatus(
      newPokemon,
      data
    );

    const newPokemonMoves = await createNewPokemonMoves(PokemonMoves, data);
    const newPokemonAbilities = await createNewPokemonAbilities(
      PokemonAbilities,
      data
    );

    // Pedimos la lista para doble checkear de que exista una lista de tipos 
    await getPokemonTypeList() 
    const newPokemonTypes = await PokemonTypes.findOne({
      where: { nombre_type: pokemon_type },
    });
   
  
    newPokemon.addPokemonMoves([newPokemonMoves]);
    newPokemon.addPokemonAbilities([newPokemonAbilities]);
    newPokemon.addPokemonType(newPokemonTypes);
    
    newPokemonBaseStatus.bstat_id = newPokemon.id;
    await newPokemonBaseStatus.save();


    return newPokemon;
  
}


module.exports = { postNewPokemonToDb, getPokemonById, getPokemonByName };
