'use strict';
/** @type {import('sequelize-cli').Migration} */
const Form = require('../models/Form');
const {DataTypes, Sequelize} = require('sequelize');
const {getModelAttributes} = require('../utils/database');

module.exports = {
  async up(queryInterface) {
      const {tableName, attributes} = getModelAttributes(Form, Sequelize, DataTypes)
      await queryInterface.createTable(tableName, attributes);
  },
  async down(queryInterface, Sequelize) {

    const {tableName} = getModelAttributes(Form ,Sequelize, DataTypes);
    await queryInterface.dropTable(tableName);
  }
};