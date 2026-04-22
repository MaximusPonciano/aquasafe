import { Sequelize, DataTypes } from "sequelize";

import sequelize from "../database.js";

const Item_CheckList= sequelize.define("item_checklist", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  checklist_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references:{model: 'CheckList', key: 'id'}
  },
  PergUnta_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references:{model: 'Pergunta', key: 'id'}
  },
  conforme: {
    type: DataTypes.BOOLEAN
  }
});

export default Item_CheckList;
