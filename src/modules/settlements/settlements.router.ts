import { Router } from "express";
import SettlementController from "./settlement.controller";

const SettlementRouter = Router();

SettlementRouter.get("/settlements", SettlementController.getSettlements);
SettlementRouter.get("/settlement/:code", SettlementController.getSettlement);

export default SettlementRouter;
