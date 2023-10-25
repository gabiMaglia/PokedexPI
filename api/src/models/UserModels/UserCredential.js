const {DataTypes} = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define('user_credentials', {
        usercredential_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
          user_handle: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          user_password: {
            type: DataTypes.STRING,
            allowNull: false,
          },
    }) 
}