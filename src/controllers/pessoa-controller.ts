import { Request, Response } from "express";
import { PessoaModel } from "../models/pessoa-model";

class PessoaController {
  async findAll(req: Request, res: Response) {
    let usuarios = await PessoaModel.findAll();
    return usuarios.length > 0
      ? res.status(200).json(usuarios)
      : res.status(204).send();
  }
  async findOne(req: Request, res: Response) {
    let usuario = await PessoaModel.findByPk(req.params.id);
    return usuario ? res.status(200).json(usuario) : res.status(204).send();
  }
  async create(req: Request, res: Response) {
    let {
      descTipoPessoa,
      flagCliente,
      flagFuncionario,
      flagMotorista,
      descDocumentoIdentificacao,
      descNomeRazaoSocial,
      descNomeFantasia,
      descRgInscricaoEstadual,
      descInscricaoMunicipal,
      dataNascimento,
      descEmail,
    } = req.body;

    let usuario = await PessoaModel.create({
      descTipoPessoa,
      flagCliente,
      flagFuncionario,
      flagMotorista,
      descDocumentoIdentificacao,
      descNomeRazaoSocial,
      descNomeFantasia,
      descRgInscricaoEstadual,
      descInscricaoMunicipal,
      dataNascimento,
      descEmail,
    });
    return res.status(201).json(usuario);
  }
  async update(req: Request, res: Response) {
    let { id } = req.params;

    await PessoaModel.update(req.body, {
      where: { id },
    });
    return res.status(204).send();
  }
  async destroy(req: Request, res: Response) {
    let { id } = req.params;

    await PessoaModel.destroy({
      where: { id },
    });
    return res.status(204).send();
  }
}

export default new PessoaController();
