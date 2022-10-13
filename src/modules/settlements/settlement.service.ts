import SettlementModel from "./settlements.schema";

class SettlementController {
    async getSettlements() {
       const settlements = await SettlementModel.find();
       return settlements;
    }
}

export default new SettlementController();