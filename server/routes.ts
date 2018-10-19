import express from 'express';

import userRouter from './api/user.router';
import videoRouter from './api/video.router';

const app = express();
app.use('/video', videoRouter);
app.use('/user', userRouter);
export const Routes: express.Express = app;