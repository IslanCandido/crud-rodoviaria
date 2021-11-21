import { DataTypes } from "sequelize";
import { sequelize } from "../connections/connection";

export const UsuarioModel = sequelize.define("usuario", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  descLogin: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descSenha: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});
