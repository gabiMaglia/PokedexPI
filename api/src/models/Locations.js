const {DataTypes} = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define('Location', {
        location_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
          },
          location_name: {
            type: DataTypes.STRING,
            allowNull: false,
          }
    }) 
}