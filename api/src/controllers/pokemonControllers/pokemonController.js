const {
  Pokemon,
  PokemonBaseStatus,
  PokemonMoves,
  PokemonAbilities,
  PokemonTypes,
} = require("../../db");

const createNewPokemonBaseStatus = require("./baseStatusController");
const createNewPokemonMoves = require("./movesController");
const createNewPokemonAbilities = require("./abilitiesController");

const getPokemonByIdHandler = async (req, res) => {
  try {
    const pokemonId = req.params.id;
    console.log(pokemonId);

    const pokemon = await Pokemon.findByPk(pokemonId, {
      include: [
        PokemonBaseStatus,
        PokemonMoves,
        PokemonAbilities,
        PokemonTypes,
      ],
    });

    if (!pokemon) {
      return res.status(404).json({ message: "Pokémon not found" });
    }

    res.status(200).json(pokemon);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const postPokemonHandler = async (req, res) => {
  try {
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
    } = req.body;

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
      req.body
    );

    const newPokemonMoves = await createNewPokemonMoves(PokemonMoves, req.body);
    const newPokemonAbilities = await createNewPokemonAbilities(
      PokemonAbilities,
      req.body
    );

    const newPokemonTypes = await PokemonTypes.findOne({
      where: { nombre_type: pokemon_type },
    });

    newPokemon.addPokemonMoves([newPokemonMoves]);
    newPokemon.addPokemonAbilities([newPokemonAbilities]);
    newPokemon.addPokemonType(newPokemonTypes);

    newPokemonBaseStatus.bstat_id = newPokemon.id;
    await newPokemonBaseStatus.save();

    res.status(200).json(newPokemon);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = { postPokemonHandler, getPokemonByIdHandler };
