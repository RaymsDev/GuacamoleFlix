import dotenv from 'dotenv';
import { NextFunction, Request, Response } from 'express';
import * as admin from 'firebase-admin';
import HttpStatus from 'http-status-codes';
import { User } from '../../both/models/user.model';
import { UserController } from '../controllers/user.controller';

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
    console.info("Auth bearer activated");

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
    this.isAuth = this.isAuth.bind(this);
    this.getFirebaseId = this.getFirebaseId.bind(this);
    this.isAdmin = this.isAdmin.bind(this);
    this.isAuthBeforeCreate = this.isAuthBeforeCreate.bind(this);
  }

  public isAuth(req: Request, res: Response, next: NextFunction): void {
    // we didn't check auth in development env
    if (ENV === 'development') {
      return next();
    }

    this.app.auth().verifyIdToken(req.headers.authorization)
      .then((user) => {
        return UserController.selectCurrentDBModel(user.uid);
      })
      .then((user) => {
        req.authUser = user;
        next();
      })
      .catch((error) => {
        res.sendStatus(HttpStatus.UNAUTHORIZED);
      });
  }
  public isAuthBeforeCreate(req: Request, res: Response, next: NextFunction): void {
    // we didn't check auth in development env
    if (ENV === 'development') {
      return next();
    }

    this.app.auth().verifyIdToken(req.headers.authorization)
      .then(() => next())
      .catch((error) => {
        res.sendStatus(HttpStatus.UNAUTHORIZED);
      });
  }

  public isAdmin(req: Request, res: Response, next: NextFunction): void {
    // we didn't check auth in development env
    if (ENV === 'development') {
      return next();
    }

    if (req.authUser.isAdmin) {
      return next();
    }

    res.sendStatus(HttpStatus.UNAUTHORIZED);
  }

  public getFirebaseId(req: Request): Promise<string> {
    // we didn't check auth in development env
    if (ENV === 'development') {
      return Promise.resolve("FakeFirebaseId" + Math.random());
    }

    const promise = new Promise<string>((resolve, reject) => {
      this.app.auth().verifyIdToken(req.headers.authorization)
        .then((user) => {
          resolve(user.uid);
        })
        .catch((error) => {
          reject(error);
        });
    });

    return promise;

  }

}

const authenticationHelper = new AuthenticationHelper();

export default authenticationHelper;
