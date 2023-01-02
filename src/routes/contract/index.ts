import express from "express";
import { getProfile } from "../../middleware/getProfile";
import { getContractById } from "./contract.controller";

const contractRouter = express.Router();

/**
 * FIXED!
 * @returns contract by id
 */
contractRouter.get("/:id", getProfile, async (req, res) => {
  const { Contract } = req.app.get("models");
  const { id } = req.params;
  const contract = await Contract.findOne({ where: { id } });
  if (!contract) return res.status(404).end();
  res.json(contract);
});

export default contractRouter;
