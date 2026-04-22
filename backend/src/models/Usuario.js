import { Sequelize, DataTypes } from "sequelize";

import sequelize from "../database.js";

const User = sequelize.define(
  "usuarios",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "nome",
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "perfil",
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "senha",
    },
  },
  {
    tableName: "usuarios",
    timestamps: false,
  },
);

export default User;
