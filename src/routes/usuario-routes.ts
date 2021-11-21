import express from "express";
import usuarioController from "../controllers/usuario-controller";

const UsuarioRouter = express.Router();

UsuarioRouter.get("/usuarios", usuarioController.findAll);

UsuarioRouter.get("/usuarios/:id", usuarioController.findOne);

UsuarioRouter.post("/usuarios", usuarioController.create);

UsuarioRouter.put("/usuarios/:id", usuarioController.update);

UsuarioRouter.delete("/usuarios/:id", usuarioController.destroy);

export { UsuarioRouter };
