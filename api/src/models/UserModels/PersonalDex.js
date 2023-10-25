const {DataTypes} = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define('personal_dex', {
        dex_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          }
    }) 
}