'use strict';
const productCategoriesData = require('../data/productCategories.json');
/** @type {import('sequelize-cli').Migration} */


module.exports = {
  async up(queryInterface, Sequelize) {

    const productCategoriesToAdd = productCategoriesData.map(p => {
      return {
        product_id: p.productId,
        category_id: p.categoryId
      }
    })

    await queryInterface.bulkInsert('product_categories', productCategoriesToAdd, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('product_categories', null, {});
  }
};
