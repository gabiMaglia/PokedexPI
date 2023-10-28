const {Router} = require('express');
const {getPokemonTypeHandler} = require('../../controllers/pokemonControllers/typeController')

const pokemonRouter = Router()

pokemonRouter.get('/')
pokemonRouter.get('/:idPokemon' )
pokemonRouter.get('/')
pokemonRouter.post('/')
pokemonRouter.get('/types', getPokemonTypeHandler)

module.exports = pokemonRouter