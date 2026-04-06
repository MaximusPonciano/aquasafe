const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../database.js");

const Perguntas= sequelize.define("perguntas", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  atracao_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references:{model: 'Atracao', key: 'id'}
  },
  pergunta: {
    type: DataTypes.STRING,
    allowNull: false
  }
},{
    tableName:'perguntas',
    timestamps: false 

});

module.exports = Perguntas;
