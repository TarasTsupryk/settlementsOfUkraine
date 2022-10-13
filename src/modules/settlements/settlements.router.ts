import { Router } from "express";
import SettlementController from "./settlement.controller";

const SettlementRouter = Router();

SettlementRouter.get("/settlements", SettlementController.getSettlements);

export default SettlementRouter;
