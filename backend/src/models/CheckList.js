import { Sequelize, DataTypes } from "sequelize";

import sequelize from "../database.js";

const Checklist = sequelize.define("checklists", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "usuario_id",
    references: { model: "Usuario", key: "id" },
  },
  attractionId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "atracao_id",
    references: { model: "Atracao", key: "id" },
  },
  dateTime: {
    type: DataTypes.DATE,
    allowNull: false,
    field: "data_hora",
  },
  observation: {
    type: DataTypes.STRING,
    allowNull: true,
    field: "observacoes",
  },
  
},{
  tableName: 'checklist',
  timestamps: false
} );


export default Checklist;
