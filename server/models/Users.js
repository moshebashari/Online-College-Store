const { sequelize } = require('../utils/database');

module.exports = (sequelizev, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        username: {
            allowNull: false,
            type: DataTypes.STRING(50),
            unique: true,
            validate: {
                len: [3, 50],
            },

        },
        email: {
            allowNull: false,
            type: DataTypes.STRING(100),
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            allowNull: false,
            type: DataTypes.STRING
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE,
            field: 'created_at',
            // defaultValue: DataTypes.literal('CURRENT_TIMESTAMP'),
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE,
            field: 'updated_at',
            // defaultValue: DataTypes.literal('CURRENT_TIMESTAMP'),
            // onUpdate: DataTypes.literal('CURRENT_TIMESTAMP'),
        }
    }, {
        tableName: 'users'
    })

    return User;
}