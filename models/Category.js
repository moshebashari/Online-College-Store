const { sequelize } = require('../utils/database');

module.exports = (sequelizez, DataTypes) => {
    const Category = sequelize.define('Category', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING
        }
    }, {
        timestamps: false
    })
    return Category
}