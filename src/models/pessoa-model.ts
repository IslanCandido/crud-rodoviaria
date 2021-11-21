import { DataTypes } from "sequelize";
import { sequelize } from "../connections/connection";

export const PessoaModel = sequelize.define("pessoa", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  descTipoPessoa: {
    type: DataTypes.STRING(2),
    allowNull: false,
  },
  flagCliente: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: false,
  },
  flagFuncionario: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: false,
  },
  flagMotorista: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: false,
  },
  descDocumentoIdentificacao: {
    type: DataTypes.STRING(2),
    allowNull: false,
  },
  descNomeRazaoSocial: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descNomeFantasia: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  descRgInscricaoEstadual: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  descInscricaoMunicipal: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  dataNascimento: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  descEmail: {
    type: DataTypes.STRING(500),
    allowNull: true,
  },
});

