const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "PokemonStatPoints",
    {
      pokemon_stats_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      pokemon_stats_hp: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      pokemon_stats_attack: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      pokemon_stats_defense: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      pokemon_stats_special_attack: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      pokemon_stats_special_defense: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      pokemon_stats_speed: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
