
const {DataTypes} = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define('User', {
        user_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
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
          user_birthdate: {
            type: DataTypes.DATE,
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