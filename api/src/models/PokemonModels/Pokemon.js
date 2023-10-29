const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', {
    pokemon_id: {
      type: DataTypes.INTEGER,
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
      allowNull:false
    },
    pokemon_weight: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    pokemon_image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pokemon_basexp: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false,
    },
    pokemon_evolitions: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    pokemon_isLocal: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    }
  },
  {
    timestamps: false,
  }
  );
};
