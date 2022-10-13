import express from 'express';
import dotenv from 'dotenv';

import server, { onServerStart } from './src/app/server';

dotenv.config();

const PORT = process.env.PORT || 4000;

const startServer = async () => {
    try {
        server.listen(PORT, onServerStart);
    } catch (e) {
        console.log(e);
    }
};

startServer();
