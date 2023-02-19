const { Sequelize} = require('sequelize');
const db = require('../configuration/database')

const Developer = db.define('developer', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  gender: {
    type: Sequelize.STRING,
    allowNull: false
  },
  born_at: {
    type: Sequelize.DATE,
    allowNull: false
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  hobby: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
    tableName: 'developer',
    timestamps: false
});

module.exports = Developer;

const Level = require('./levelEntity')
Developer.belongsTo(Level, {
  foreignKey: 'levelId', 
  as: 'level' 
})