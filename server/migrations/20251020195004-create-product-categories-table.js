'use strict';
/** @type {import('sequelize-cli').Migration} */
const productCategories = require('../models/ProductCategories');
const {DataTypes, Sequelize} = require('sequelize');
const {getModelAttributes} = require('../utils/database');

module.exports = {
  async up(queryInterface) {
      const {tableName, attributes} = getModelAttributes(productCategories, Sequelize, DataTypes)
      await queryInterface.createTable(tableName, attributes);
  },
  async down(queryInterface, Sequelize) {

    const {tableName} = getModelAttributes(productCategories ,Sequelize, DataTypes);
    await queryInterface.dropTable(tableName);
  }
};