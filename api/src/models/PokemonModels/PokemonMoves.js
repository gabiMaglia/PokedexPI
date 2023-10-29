const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('PokemonMoves', {
    move_id : {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    move_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    move_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    move_power: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    move_accuarcy: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, 
  {
    timestamps: false,
  });
};