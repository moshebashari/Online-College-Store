'use strict';
const productsData = require('../data/products.json');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    const today = new Date();

    const productsToAdd = productsData.map(p => {
      return {
        ...p,
        sku: p.id,
        created_at: today,
        updated_at: today
      }
    })

    await queryInterface.bulkInsert('products', productsToAdd, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  }
};
