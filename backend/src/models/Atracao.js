const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../database.js");

const Atracao = sequelize.define("Atracoes",{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nome: {
        type: DataTypes.STRING
    },
    ativo: {
        type: DataTypes.BOOLEAN
    }
});

module.exports = Atracao;