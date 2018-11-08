import express from 'express';

import categoryRouter from './api/category.router';
import profileRouter from './api/profile.router';
import subscriptionRouter from './api/subscription.router';
import userRouter from './api/user.router';
import videoRouter from './api/video.router';

const app = express();
app.use('/category', categoryRouter);
app.use('/profile', profileRouter);
app.use('/subscriptions', subscriptionRouter);
app.use('/users', userRouter);
app.use('/video', videoRouter);

export const Routes: express.Express = app;
