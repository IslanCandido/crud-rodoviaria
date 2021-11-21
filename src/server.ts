import express, { json } from "express";
import { sequelize } from "./connections/connection";
import { UsuarioRouter } from "./routes/usuario-routes";
import { PessoaRouter } from "./routes/pessoa-routes";

const app = express();

app.use(json());
app.use(UsuarioRouter);
app.use(PessoaRouter);

app.listen(3000, async () => {
  await sequelize.sync();
  console.log("Servidor rodando na porta 3000.");
});
