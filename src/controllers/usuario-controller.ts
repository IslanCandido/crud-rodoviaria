import { Request, Response } from "express";
import { UsuarioModel } from "../models/usuario-model";

class UsuarioController {
  async findAll(req: Request, res: Response) {
    let usuarios = await UsuarioModel.findAll();
    return usuarios.length > 0
      ? res.status(200).json(usuarios)
      : res.status(204).send();
  }
  async findOne(req: Request, res: Response) {
    let usuario = await UsuarioModel.findByPk(req.params.id);
    return usuario ? res.status(200).json(usuario) : res.status(204).send();
  }
  async create(req: Request, res: Response) {
    let { descLogin, descSenha } = req.body;

    let usuario = await UsuarioModel.create({
      descLogin,
      descSenha,
    });
    return res.status(201).json(usuario);
  }
  async update(req: Request, res: Response) {
    let { id } = req.params;

    await UsuarioModel.update(req.body, {
      where: { id },
    });
    return res.status(204).send();
  }
  async destroy(req: Request, res: Response) {
    let { id } = req.params;

    await UsuarioModel.destroy({
      where: { id },
    });
    return res.status(204).send();
  }
}

export default new UsuarioController();
