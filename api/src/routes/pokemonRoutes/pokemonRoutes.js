const {Router} = require('express');
const {getPokemonTypeHandler} = require('../../controllers/pokemonControllers/typeController')
const {postPokemonHandler, getPokemonHandlerById} = require('../../controllers/pokemonControllers/pokemonController')
const pokemonRouter = Router()

pokemonRouter.get('/')
pokemonRouter.get('/:id', getPokemonHandlerById )
pokemonRouter.get('/')
pokemonRouter.post('/', postPokemonHandler)
pokemonRouter.get('/types', getPokemonTypeHandler)

module.exports = pokemonRouter