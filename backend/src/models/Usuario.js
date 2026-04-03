const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../database.js");

const usuario = sequelize.define("usuarios", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  perfil: {
    type: DataTypes.STRING,
    allowNull: false
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false
  }
  
},{
  tableName: 'usuarios',
  timestamps: false
});

module.exports = usuario;
