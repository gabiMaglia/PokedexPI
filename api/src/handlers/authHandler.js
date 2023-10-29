const { UserCredentials } = require("../db");
const bcrypt = require("bcrypt");

const loginAuthHandler = async (req, res) => {
  try {
    const { user_handle, user_password } = req.body;

    if (!user_handle || user_handle === "" || !user_password || user_password === "") {
      return res.status(400).send("Faltan datos");
    }
    const newAcces = await UserCredentials.findOne({
      where: { user_handle: user_handle },
    });
   
    if (!newAcces) return res.status(404).send({ message: "User not found" });
    
    const isCorrectPassword = await bcrypt.compare(
      user_password,
      newAcces.user_password
    );

    if (!isCorrectPassword)
    return res.status(403).send({ message: "Wrong password" });
    return res.status(200).json({ access: true });

  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = loginAuthHandler;
