import express from "express";
import pessoaController from "../controllers/pessoa-controller";

const PessoaRouter = express.Router();

PessoaRouter.get("/pessoas", pessoaController.findAll);

PessoaRouter.get("/pessoas/:id", pessoaController.findOne);

PessoaRouter.post("/pessoas", pessoaController.create);

PessoaRouter.put("/pessoas/:id", pessoaController.update);

PessoaRouter.delete("/pessoas/:id", pessoaController.destroy);

export { PessoaRouter };
