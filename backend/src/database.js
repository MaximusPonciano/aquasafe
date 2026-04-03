const { Sequelize } = require('sequelize');
require('dotenv').config();

const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;


const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432, 
  logging: false, 
});

const TestConexao = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexão com sucesso.');
    }catch (error) {
        console.error('Falha ao conectar', error);
    }
}

TestConexao()

module.exports = sequelize;


