import { Op } from "sequelize";
import { Contract } from "../../model";
const service: any = {};

service.getById = async (req, res) => {
  try {
    const { id } = req.params;
    const contract = await Contract.findOne({
      where: {
        id,
        [Op.or]: [{ ContractorId: req.profile }, { ClientId: req.profile }]
      }
    });
    if (!contract) return null;
    return contract;
  } catch (err) {}
};

export default service;
