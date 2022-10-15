import SettlementService from "./settlement.service";

class SettlementController {
  async getSettlements(_, res) {
    try {
      const response = await SettlementService.getSettlements();
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
    }
  }

  async getSettlement(req, res) {
    try {
      const settlementCode = req.params?.code;
      const response = await SettlementService.getSettlement(settlementCode);
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new SettlementController();
