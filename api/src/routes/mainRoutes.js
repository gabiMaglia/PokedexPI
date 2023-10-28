const { Router } = require('express');
const pokemonRoutes = require('./pokemonRoutes/pokemonRoutes')
const userRoutes = require('./userRoutes/userRoutes')
const userLogin = require('../controllers/LoginController')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const mainRouter = Router();
mainRouter.post('/login', userLogin)
mainRouter.use('/user', userRoutes)
mainRouter.use('/poke', pokemonRoutes)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = mainRouter;
