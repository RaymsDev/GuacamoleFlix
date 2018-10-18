import express from 'express';

import videoRouter from './api/video.router';

const app = express();
app.use("/video", videoRouter);

export var Routes: express.Express = app;