import express, { NextFunction, Request, Response } from 'express';

import categoryRouter from './api/category.router';
import historyRouter from './api/history.router';
import likeRouter from './api/like.router';
import profileRouter from './api/profile.router';
import subscriptionRouter from './api/subscription.router';
import userRouter from './api/user.router';
import videoRouter from './api/video.router';
import auth from './helpers/authentication.helper';

const app = express();
// auth.tokenAuth middleware add token check with firebase
app.use('/categories', auth.tokenAuth, categoryRouter);
app.use('/histories', auth.tokenAuth, historyRouter);
app.use('/likes', auth.tokenAuth, likeRouter);
app.use('/profiles', auth.tokenAuth, profileRouter);
app.use('/subscriptions', auth.tokenAuth, subscriptionRouter);
app.use('/users', auth.tokenAuth, userRouter);
app.use('/videos', auth.tokenAuth, videoRouter);

export const Routes: express.Express = app;
