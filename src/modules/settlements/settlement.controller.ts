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
}

export default new SettlementController();
