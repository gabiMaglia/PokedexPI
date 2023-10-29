const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("PokemonTypes", {
    pokemon_type_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    nombre_type: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
  );
};
