const {DataTypes} = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define('Items', {
        item_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
          },
          item_name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          item_atribute: {
            type: DataTypes.STRING,
            allowNull: false,
          }
    }) 
}