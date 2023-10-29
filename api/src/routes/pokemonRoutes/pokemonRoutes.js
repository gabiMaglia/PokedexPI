const {Router} = require('express');
const {getPokemonTypeHandler} = require('../../controllers/pokemonControllers/typeController')
const {postPokemonHandler, getPokemonHandlerById} = require('../../controllers/pokemonControllers/pokemonController')
const pokemonRouter = Router()

pokemonRouter.get('/')
pokemonRouter.get('/types', getPokemonTypeHandler)
pokemonRouter.get('/:id', getPokemonHandlerById )
// pokemonRouter.get('/')
pokemonRouter.post('/', postPokemonHandler)

module.exports = pokemonRouter