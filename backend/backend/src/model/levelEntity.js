const Sequelize = require('sequelize');
const db = require('../configuration/database')


const Level = db.define('level', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  }
}, {
    tableName: 'level',
    timestamps: false
});

module.exports = Level;

const Developer = require('./developerEntity')
Level.hasMany(Developer, {as: 'developer'})