import express from "express";
import { getProfile } from "../../middleware/getProfile";
import { getContractById, getAllContracts } from "./job.controller";

const jobRouter = express.Router();

jobRouter.get("/:id", getProfile, getContractById);
jobRouter.get("/", getProfile, getAllContracts);

export default jobRouter;
