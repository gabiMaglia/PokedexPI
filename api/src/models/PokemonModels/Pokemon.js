const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    pokemon_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    pokemon_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pokemon_image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pokemon_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pokemon_basexp: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    
  });
};
