// const { User, PersonalDex } = require("../db");
// const { postUserToDb, editUserDb } = require("../controllers/userController");

// const getUserHandler = async (req, res) => {
//   try {
//     const allUsers = await User.findAll();
//     res.status(200).json(allUsers);
//   } catch (error) {
//     return res.status(500).json(error.message);
//   }
// };

// const getByIdUserHandler = async (req, res) => {
//   try {
//     const id = req.params;
//     const user = User.findByPk(id);
//     if (user) return res.status(200).json(user);
//   } catch (error) {
//     return res.status(500).json(error.message);
//   }
// };
// const postUserHandler = async (req, res) => {
//   try {
//     const newUser = await postUserToDb(req.body);
//     return res.status(200).json(newUser);
//   } catch (error) {
//     return res.status(500).json(error.message);
//   }
// };

// const editUserHandler = async (req, res) => {
//   try {
//   } catch (error) {
//     return res.status(500).json(error.message);
//   }
// };

// module.exports = {
//   getUserHandler,
//   getByIdUserHandler,
//   postUserHandler,
//   editUserHandler,
// };
