
const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon_effortstats', {
    effort_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
    effort_life: {
        type: DataTypes.INTEGER,
        allowNull:false
      },
    effort_attack: {
        type: DataTypes.INTEGER,
        allowNull:false
      },
    effort_defense: {
        type: DataTypes.INTEGER,
        allowNull:false
      },
    effort_speed: {
        type: DataTypes.INTEGER,
        allowNull:false
      },
    effort_height: {
        type: DataTypes.INTEGER,
        allowNull:false
      },
    effort_weight: {
        type: DataTypes.INTEGER,
        allowNull:false
      },
  });
};