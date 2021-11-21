import express from "express";
import usuarioController from "../controllers/usuario-controller";

const router = express.Router();

router.get("/usuarios", usuarioController.findAll);

router.get("/usuarios/:id", usuarioController.findOne);

router.post("/usuarios", usuarioController.create);

router.put("/usuarios/:id", usuarioController.update);

router.delete("/usuarios/:id", usuarioController.destroy);

export { router };
