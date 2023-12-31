const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Pokemon",
    {
      pokemon_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      pokemon_name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      pokemon_height: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      pokemon_weight: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      pokemon_image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      pokemon_isLocal: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
    },
    {
      timestamps: false,
    }
  );
};
