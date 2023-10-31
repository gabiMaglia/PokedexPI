const { Router } = require("express");
const getPokemonTypesHandler = require("../../handlers/pokemonHandler/typeHandlers");
const {
  postPokemonHandler,
  getPokemonByIdHandler,
  getPokemonByNameHandler,
} = require("../../handlers/pokemonHandler/pokemonHandlers");

const pokemonRouter = Router();

pokemonRouter.get("/");
pokemonRouter.get("/name", getPokemonByNameHandler);
pokemonRouter.get("/get-types", getPokemonTypesHandler);
// AGREGAMOS LA REGEXP PARA QUE SOLO INGRESE SI LO QUE VIENE COMO ID ES UN NUMERO ENTERO
pokemonRouter.get("/:id(\\d+)", getPokemonByIdHandler);
pokemonRouter.post("/", postPokemonHandler);

module.exports = pokemonRouter;
