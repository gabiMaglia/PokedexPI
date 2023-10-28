const {Router} = require('express');
const {getPokemonTypeHandler} = require('../../controllers/pokemonControllers/typeController')
const {postPokemonHandler} = require('../../controllers/pokemonControllers/pokemonController')
const pokemonRouter = Router()

pokemonRouter.get('/')
pokemonRouter.get('/:idPokemon' )
pokemonRouter.get('/')
pokemonRouter.post('/', postPokemonHandler)
pokemonRouter.get('/types', getPokemonTypeHandler)

module.exports = pokemonRouter