const { User, PersonalDex } = require("../db");
const bcrypt = require("bcrypt");

const postUserToDb = async (data) => {
  const {
    first_name,
    last_name,
    user_birthdate,
    user_email,
    user_handle,
    user_password,
  } = data;

  const hashedUser_password = await bcrypt.hash(user_password, 8);

  const newUser = await User.create({
    first_name,
    last_name,
    user_birthdate,
    user_email,
  });

  const newUserCredentials = await newUser.createUserCredential({
    user_handle,
    user_password: hashedUser_password,
  });

  newUserCredentials.user_id = newUser.id;

  await newUserCredentials.save();

  return newUser;
};

const editUserDb = async (data) => {
  return data;
};

module.exports = {
  postUserToDb,
  editUserDb,
};
