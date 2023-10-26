const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('PokemonBaseStatus', {
    bstat_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
    bstat_life: {
        type: DataTypes.INTEGER,
        allowNull:false
      },
    bstat_attack: {
        type: DataTypes.INTEGER,
        allowNull:false
      },
    bstat_defense: {
        type: DataTypes.INTEGER,
        allowNull:false
      },
    bstat_speed: {
        type: DataTypes.INTEGER,
        allowNull:false
      },
    bstat_height: {
        type: DataTypes.INTEGER,
        allowNull:false
      },
    bstat_weight: {
        type: DataTypes.INTEGER,
        allowNull:false
      },
  });
};
