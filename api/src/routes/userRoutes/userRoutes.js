const {Router} = require('express');
const {getUserHandler, getByIdUserHandler, postUserHandler, editUserHandler} = require('../../controllers/UserController')

const userRouter = Router()

userRouter.get('/', getUserHandler)
userRouter.get('/:id', getByIdUserHandler)
userRouter.post('/postnewuser', postUserHandler)
userRouter.put('/edituser', editUserHandler)

module.exports = userRouter