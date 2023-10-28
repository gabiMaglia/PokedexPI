const {Router} = require('express');
const {getUserHandler, getByIdUserHandler, postUserHandler, editUserHandler} = require('../../controllers/UserController')
const userLogin = require('../../controllers/LoginController')

const userRouter = Router()

userRouter.get('/', getUserHandler)
userRouter.get('/:id', getByIdUserHandler)
userRouter.post('/', postUserHandler)
userRouter.post('/login', userLogin)
userRouter.put('/edituser', editUserHandler)

module.exports = userRouter