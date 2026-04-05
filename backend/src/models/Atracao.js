const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../database.js");

const atracao = sequelize.define("atracoes",{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nome: {
        type: DataTypes.STRING
    },
    ativa: {
        type: DataTypes.BOOLEAN
    }
},{
    tableName:'atracoes',
    timestamps: false 
});

module.exports = atracao;