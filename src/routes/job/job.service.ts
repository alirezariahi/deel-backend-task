import { Op } from "sequelize";
import { Job, Contract } from "../../model";
const service: any = {};

service.getUnpaid = async (req, res) => {
  try {
    const userId = req.profile.id;
    const unpaidJobs = await Job.findAll({
      include: [
        {
          attributes: [],
          model: Contract,
          required: true,
          where: {
            [Op.or]: [{ ContractorId: userId }, { ClientId: userId }],
            status: {
              [Op.eq]: "in_progress"
            }
          }
        }
      ],
      where: {
        [Op.or]: [{ paid: false }, { paid: null }]
      }
    });
    if (!unpaidJobs || !unpaidJobs?.length) return null;
    return unpaidJobs;
  } catch (err) {
    throw err;
  }
};

service.pay = async (req, res) => {
  try {
    const contract = await Contract.findAll({
      where: {
        [Op.or]: [{ ContractorId: req.profile.id }, { ClientId: req.profile.id }],
        status: {
          [Op.ne]: "terminated"
        }
      }
    });
    if (!contract) return null;
    return contract;
  } catch (err) {
    throw err;
  }
};

export default service;
