import { Sequelize, DataTypes } from "sequelize";

import sequelize from "../database.js";

const ItemChecklist = sequelize.define("item_checklist", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  checklistId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "checklist_id",
    references: { model: "CheckList", key: "id" },
  },
  questionId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "Pergunta_id",
    references: { model: "Pergunta", key: "id" },
  },
  compliant: {
    type: DataTypes.BOOLEAN,
    field: "conforme",
  },
});

export default ItemChecklist;
