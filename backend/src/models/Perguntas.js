import { Sequelize, DataTypes } from "sequelize";

import sequelize from "../database.js";

const Question = sequelize.define(
  "perguntas",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    attractionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "atracao_id",
      references: { model: "Atracao", key: "id" },
    },
    questionText: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "pergunta",
    },
  },
  {
    tableName: "perguntas",
    timestamps: false,
  },
);

export default Question;
