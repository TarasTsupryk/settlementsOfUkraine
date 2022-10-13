import type { Express } from "express";

import SettlementRouter from "../modules/settlements/settlements.router";

const API_URL = "/api";

export const setRoutes = (app: Express) => {
    app.use(API_URL, SettlementRouter);
}
