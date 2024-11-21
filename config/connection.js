const { Sequelize } = require('sequelize');
require('dotenv').config();

let sequelize;

// Usa MYSQL_URL se disponibile, altrimenti usa i dettagli separati
if (process.env.MYSQL_URL) {
    sequelize = new Sequelize(process.env.MYSQL_URL);
} else {
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            dialect: 'mysql',
        }
    );
}

module.exports = sequelize;

