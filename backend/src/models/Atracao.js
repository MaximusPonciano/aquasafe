import { Sequelize, DataTypes } from "sequelize";

import sequelize from "../database.js";

const Attraction = sequelize.define(
  "atracoes",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      field: "nome",
    },
    active: {
      type: DataTypes.BOOLEAN,
      field: "ativa",
    },
  },
  {
    tableName: "atracoes",
    timestamps: false,
  },
);

export default Attraction;
