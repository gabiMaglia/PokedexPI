const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('UserPokeTeams', {
    team_id : {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    pokemon1_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pokemon2_name: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pokemon3_name: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });
};