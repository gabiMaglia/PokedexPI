
const {DataTypes} = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define('user', {
        user_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
          first_name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          last_name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          user_email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            isEmail: true,
          },
    }) 
}