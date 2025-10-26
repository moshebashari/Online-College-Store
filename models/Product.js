const { sequelize } = require('../utils/database');

module.exports = (sequelizev, DataTypes) => {
    const Product = sequelize.define('Product', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.TEXT
        },
        price: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        discount: {
            allowNull: false,
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        sku: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        stock: {
            allowNull: false,
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE,
            field: 'updated_at'
        }

    })
    Product.associate = (models) => {
        models.Product.hasMany(models.ProductImages, { foreignKey: 'product_id' });
    }

    // Product.associate = (models) => {
    //     models.Product.hasOne(models.ProductCategories, { foreignKey: 'product_id' });
    // }
    return Product;
}