import { Express } from 'express';
import { Server } from 'http';
import { app } from './app';
import { config } from 'dotenv-safe';
import { join } from 'path';

import http from 'http';

config({
  path: join(__dirname, '../.env'),
  sample: join(__dirname, '../.env.example'),
});

const port = Number(process.env.PORT);
const server: Server | Express = (process.env.PRODUCTION === 'TRUE') ? http.createServer(app) : app;

// eslint-disable-next-line no-console
server.listen(port, () => console.log(`Server started on port ${port}`));
