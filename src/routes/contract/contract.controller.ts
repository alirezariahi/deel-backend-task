import Controller from "../../helpers/controller.helper";
import service from "./contract.service";

const controller = new Controller(service);

export const getContractById = async (req, res) => {
  controller.defaultRouterController("getById", req, res);
};
