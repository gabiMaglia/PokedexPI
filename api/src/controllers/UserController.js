const { User, UserCredentials, PersonalDex } = require("../db");

const getUserHandler = async (req, res) => {
  try {
    const allUsers = await User.findAll();
    res.status(200).json(allUsers);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const getByIdUserHandler = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
const postUserHandler = async (req, res) => {
  try {
    const {first_name, last_name, user_birthdate, user_email, user_handle, user_password } = req.body
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
const editUserHandler = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = {
  getUserHandler,
  getByIdUserHandler,
  postUserHandler,
  editUserHandler,
};
