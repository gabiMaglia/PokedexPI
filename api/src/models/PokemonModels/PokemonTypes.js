const {DataTypes} = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define('pokemon_types', {
        pokemon_type_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
          nombre_type: {
            type: DataTypes.STRING,
            allowNull: false,
          }
    }) 
}