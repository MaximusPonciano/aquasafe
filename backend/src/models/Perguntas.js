import { Sequelize, DataTypes } from "sequelize";

import sequelize from "../database.js";

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

export default Perguntas;
