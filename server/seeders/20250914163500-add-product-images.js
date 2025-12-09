'use strict';
const productImagesData = require('../data/productImages.json');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    const productImagesToAdd = [];

    for (let product of productImagesData) {
      for (let img of product.images) {
        productImagesToAdd.push({ product_id: product.productId, url: img });
      }
    }

    await queryInterface.bulkInsert('product_images', productImagesToAdd, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('product_images', null, {});
  }
};
