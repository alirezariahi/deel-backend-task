import express from "express";
import { getProfile } from "../../middleware/getProfile";
import { getUnpaidJobs, getAllContracts } from "./job.controller";

const jobRouter = express.Router();

jobRouter.get("/unpaid", getProfile, getUnpaidJobs);
jobRouter.get("/", getProfile, getAllContracts);

export default jobRouter;
