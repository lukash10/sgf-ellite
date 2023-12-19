const Sequelize = require("sequelize");

const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    // timezone: '-03:00', // Ajuste o fuso horário conforme necessário
    // dialectOptions: {
    //   useUTC: false // Configure conforme necessário
    // }
  }
);

module.exports = {
    sequelize: Sequelize,
    db: db,
};