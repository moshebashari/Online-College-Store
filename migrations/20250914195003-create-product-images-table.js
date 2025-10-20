'use strict';
/** @type {import('sequelize-cli').Migration} */
const ProductImages = require('../models/ProductImages');
const {DataTypes, Sequelize} = require('sequelize');
const {getModelAttributes} = require('../utils/database');

module.exports = {
  async up(queryInterface) {
      const {tableName, attributes} = getModelAttributes(ProductImages, Sequelize, DataTypes)
      await queryInterface.createTable(tableName, attributes);
  },
  async down(queryInterface, Sequelize) {

    const {tableName} = getModelAttributes(ProductImages ,Sequelize, DataTypes);
    await queryInterface.dropTable(tableName);
  }
};