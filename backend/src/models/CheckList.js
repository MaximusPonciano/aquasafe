const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../database.js");

const CheckList= sequelize.define("checklists", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  usuario_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references:{model: 'Usuario', key: 'id'}
  },
  atracao_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references:{model: 'Atracao', key: 'id'}
  },
  data_hora: {
    type: DataTypes.DATE,
    allowNull: false
  },
  obseravao: {
    type: DataTypes.STRING,
    allowNull: true
  },
});

module.exports = CheckList;
