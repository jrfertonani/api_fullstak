const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('gazin_api', 'root', 'admin', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

sequelize
  .sync()
  .then((result) => {
    console.log("database connect with success. ");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = sequelize