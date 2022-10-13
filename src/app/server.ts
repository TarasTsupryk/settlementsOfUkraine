import express from 'express';
import cors from "cors";
import dotenv from "dotenv";
import os from "os";

import { setRoutes } from './server.router';
import connectToDb from '../database/database';

dotenv.config();

const PORT = process.env.PORT || 4000;
const PROTOCOL = process.env.PROTOCOL;
const ADDRESS = os.networkInterfaces().Ethernet?.[1].address;
const ORIGINS = process.env.ORIGINS;

export const onServerStart = () => {
    console.clear();
    console.log(`Server started on - ${PROTOCOL}://localhost${PORT} (local)`);
    console.log(`Server started on - ${PROTOCOL}://${ADDRESS}:${PORT}`);
    connectToDb();
}

const server = express();
server.use(express.json());
server.use(
    cors({
        origin: ORIGINS,
    })
);
setRoutes(server);

export default server;

