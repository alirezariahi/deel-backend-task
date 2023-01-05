import express from "express";
import bodyParser from "body-parser";
import { sequelize } from "./model";
import contractRouter from "./routes/contract";
import jobRouter from "./routes/job";

const app = express();
app.use(bodyParser.json());
app.set("sequelize", sequelize);
app.use("/contracts", contractRouter);
app.use("/jobs", jobRouter);

export default app;
