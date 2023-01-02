import httpError from "http-errors";
export default class Controller {
  constructor(private service) {}

  defaultRouterController = async (methodName, req, res) => {
    try {
      const result = await this.service[methodName](req, res);
      if (!result) {
        res.send(httpError[404]);
      } else {
        res.status(200).json(result);
      }
    } catch (error) {
      res.status(500).json({ error });
    }
  };
}
