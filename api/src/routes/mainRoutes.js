const { Router } = require('express');
const pokemonRoutes = require('./pokemonRoutes/pokemonRoutes')
const userRoutes = require('./userRoutes/userRoutes')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const mainRouter = Router();

mainRouter.use('/user', userRoutes)
mainRouter.use('/poke', pokemonRoutes)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = mainRouter;
