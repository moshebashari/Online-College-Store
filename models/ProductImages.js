const {sequelize} = require('../utils/database');

module.exports = (sequelizez, DataTypes) => {
    const ProductImages = sequelize.define('ProductImages', {
        prodcutId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            field: 'product_id',
            primaryKey: true
        },
        url: {
            allowNull: false,
            type: DataTypes.STRING,
            primaryKey: true
        }
    }, {
        indexes: [{
            unique: true,
            fields: ['product_id', 'url']
        }],
        tableName: 'product_images',

        timestamps: false
        
    })

    return ProductImages;
}
