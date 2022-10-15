import SettlementModel from "./settlements.schema";

class SettlementController {
    async getSettlements() {
        const settlements = await SettlementModel.find();
        return settlements;
    }

    async getSettlement(settlementCode: number) {
        const settlements = await SettlementModel.findOne({ code: settlementCode });
        return settlements;
    }
}

export default new SettlementController();