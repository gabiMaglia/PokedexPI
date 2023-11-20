const { Router } = require("express");
const getPokemonTypesHandler = require("../../handlers/pokemonHandler/typeHandlers");
const {
  getAllPokemonsHandler,
  getPokemonByIdHandler,
  getPokemonByNameHandler,
  postPokemonHandler,
  getAllPokemonsBySeasonHandler,
  deletePokemonByIdHandler,
} = require("../../handlers/pokemonHandler/pokemonHandlers");

const pokemonRouter = Router();

pokemonRouter.get("/name", getPokemonByNameHandler);
pokemonRouter.get("/get-types", getPokemonTypesHandler);
// AGREGAMOS LA REGEXP PARA QUE SOLO INGRESE SI LO QUE VIENE COMO ID ES UN NUMERO ENTERO
pokemonRouter.get("/:id(\\d+)", getPokemonByIdHandler);
pokemonRouter.get("/season", getAllPokemonsBySeasonHandler);
pokemonRouter.get("/", getAllPokemonsHandler);
pokemonRouter.post("/", postPokemonHandler);
pokemonRouter.delete("/:id", deletePokemonByIdHandler);

module.exports = pokemonRouter;
