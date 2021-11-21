import express, { json } from "express";
import { sequelize } from "./connections/connection";
import { router } from "./routes/usuario-routes";

const app = express();

app.use(json());
app.use(router);

app.listen(3000, async () => {
  await sequelize.sync();
  console.log("Servidor rodando na porta 3000.");
});
