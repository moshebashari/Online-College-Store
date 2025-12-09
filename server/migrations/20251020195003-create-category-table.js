'use strict';
/** @type {import('sequelize-cli').Migration} */
const Category = require('../models/Category');
const {DataTypes, Sequelize} = require('sequelize');
const {getModelAttributes} = require('../utils/database');

module.exports = {
  async up(queryInterface) {
      const {tableName, attributes} = getModelAttributes(Category, Sequelize, DataTypes)
      await queryInterface.createTable(tableName, attributes);
  },
  async down(queryInterface, Sequelize) {

    const {tableName} = getModelAttributes(Category ,Sequelize, DataTypes);
    await queryInterface.dropTable(tableName);
  }
};