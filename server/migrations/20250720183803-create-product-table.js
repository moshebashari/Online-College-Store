'use strict';
/** @type {import('sequelize-cli').Migration} */
const Product = require('../models/Product');
const {DataTypes, Sequelize} = require('sequelize');
const {getModelAttributes} = require('../utils/database');

module.exports = {
  async up(queryInterface) {
      const {tableName, attributes} = getModelAttributes(Product, Sequelize, DataTypes)
      await queryInterface.createTable(tableName, attributes);
  },
  async down(queryInterface, Sequelize) {

    const {tableName} = getModelAttributes(Product ,Sequelize, DataTypes);
    await queryInterface.dropTable(tableName);
  }
};