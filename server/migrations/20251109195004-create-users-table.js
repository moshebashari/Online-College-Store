'use strict';
/** @type {import('sequelize-cli').Migration} */
const users = require('../models/Users');
const {DataTypes, Sequelize} = require('sequelize');
const {getModelAttributes} = require('../utils/database');

module.exports = {
  async up(queryInterface) {
      const {tableName, attributes} = getModelAttributes(users, Sequelize, DataTypes)
      await queryInterface.createTable(tableName, attributes);
  },
  async down(queryInterface, Sequelize) {

    const {tableName} = getModelAttributes(users ,Sequelize, DataTypes);
    await queryInterface.dropTable(tableName);
  }
};