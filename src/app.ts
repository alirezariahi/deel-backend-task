import express from "express";
import bodyParser from "body-parser";
import { sequelize } from "./model";
import contractRouter from "./routes/contract";
const app = express();
app.use(bodyParser.json());
app.set("sequelize", sequelize);
app.set("models", sequelize.models);

app.use("/contracts", contractRouter);

export default app;
