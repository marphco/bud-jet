const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

// Controlla se JAWSDB_URL è configurato
if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: process.env.DB_HOST || 'localhost', // Usa DB_HOST dalla variabile d'ambiente
            port: process.env.DB_PORT || 3306,        // Usa DB_PORT dalla variabile d'ambiente
            dialect: 'mysql',
        }
    );
}

module.exports = sequelize;
