const {Router} = require('express');
const getPokemonTypesHandler = require('../../handlers/pokemonHandler/typeHandlers')
const {postPokemonHandler, getPokemonByIdHandler, getPokemonByNameHandler} = require('../../handlers/pokemonHandler/pokemonHandlers')

const pokemonRouter = Router()

// pokemonRouter.get('/')
pokemonRouter.get('/', getPokemonByNameHandler)
// pokemonRouter.get('/types', getPokemonTypesHandler)
// pokemonRouter.get('/:id', getPokemonByIdHandler )

pokemonRouter.post('/', postPokemonHandler)

module.exports = pokemonRouter