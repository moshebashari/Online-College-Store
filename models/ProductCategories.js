const { sequelize } = require('../utils/database');

module.exports = (sequelizez, DataTypes) => {
    const ProductCategories = sequelize.define('productCategories', {
        productId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            field: 'product_id',
            primaryKey: true
        },
        categoryId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            field: 'category_id',
            primaryKey: true
        }
    }, {
        indexes: [{
            unique: true,
            fields: ['product_id', 'category_id']
        }],
        timestamps: false,
        tableName: 'product_categories'
    })
    return ProductCategories;
}