export default class controller {
  constructor(protected service, protected controller) {}

  protected defaultRouterController = async (req, res) => {
    try {
      const result = await ContractService.getContractById(req);
      if (!contract) {
        res.sendStatus(httpStatus.NOT_FOUND);
      } else {
        res.status(httpStatus.OK).json(contract);
      }
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error });
    }
  };
}
