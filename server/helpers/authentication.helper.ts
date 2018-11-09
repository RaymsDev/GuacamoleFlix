import dotenv from 'dotenv';
import { NextFunction, Request, Response } from 'express';
import * as admin from 'firebase-admin';
import HttpStatus from 'http-status-codes';

const dotenvFilePath = './../.env';
// To read dotenv file
dotenv.config({
  path: dotenvFilePath
});

const FIREBASE_CLIENT_EMAIL = process.env.FIREBASE_CLIENT_EMAIL;
const FIREBASE_DATABASE_URL = process.env.FIREBASE_DATABASE_URL;
const FIREBASE_PRIVATE_KEY = process.env.FIREBASE_PRIVATE_KEY;
const FIREBASE_PROJECT_ID = process.env.FIREBASE_PROJECT_ID;
const ENV = process.env.ENV;

class AuthenticationHelper {
  private app: admin.app.App;
  constructor() {
    console.info("Auth bearer crete");

    if (ENV === 'development') {
      return;
    }

    this.app = admin.initializeApp({
      credential: admin.credential.cert({
        clientEmail: FIREBASE_CLIENT_EMAIL,
        privateKey: FIREBASE_PRIVATE_KEY,
        projectId: FIREBASE_PROJECT_ID
      }),
      databaseURL: FIREBASE_DATABASE_URL
    });

    // for the this binding
    this.tokenAuth = this.tokenAuth.bind(this);
  }

  public tokenAuth(req: Request, res: Response, next: NextFunction): void {
    // we didn't check auth in development env
    if (ENV === 'development') {
      return next();
    }
    this.app.auth().verifyIdToken(req.headers.authorization)
      .then(() => next())
      .catch((error) => {
        console.error(error);
        res.sendStatus(HttpStatus.UNAUTHORIZED);
      });
  }

}

const authenticationHelper = new AuthenticationHelper();

export default authenticationHelper;
