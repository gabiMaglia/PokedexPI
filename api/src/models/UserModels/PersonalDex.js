const {DataTypes} = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define('PersonalDex', {
        dex_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
          }
    }) 
}