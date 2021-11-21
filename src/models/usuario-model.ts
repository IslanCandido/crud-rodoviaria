import { DataTypes } from "sequelize";
import { sequelize } from "../connections/connection";
import { PessoaModel } from "./pessoa-model";

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
  },
});

UsuarioModel.belongsTo(PessoaModel, {
  constraints: true,
  foreignKey: "idPessoa",
});
