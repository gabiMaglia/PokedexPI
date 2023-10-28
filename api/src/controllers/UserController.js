const { User, PersonalDex } = require("../db");

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
     // Crear un nuevo usuario
     const newUser = await User.create({
        first_name,
        last_name,
        user_birthdate,
        user_email,
      });
  
      // Crear un nuevo registro en la tabla UserCredentials
      const newUserCredentials = await newUser.createUserCredential({
        user_handle,
        user_password,
      });
  
      // Asignar el ID del usuario principal al registro de UserCredentials
      newUserCredentials.user_id = newUser.id;
  
      // Guardar el registro de UserCredentials
      await newUserCredentials.save();
  
      return res.status(200).json(newUser);

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
