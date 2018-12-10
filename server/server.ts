import express from "express";
import { RestServer } from './server-rest';

import dotenv from 'dotenv';
import { IUserDBModel } from "./schemas/user.schema";

const dotenvFilePath = './../.env';
// To read dotenv file
dotenv.config({
  path: dotenvFilePath
});

declare global {
  namespace Express {
    // These open interfaces may be extended in an application-specific manner via declaration merging.
    // See for example method-override.d.ts (https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/method-override/index.d.ts)
    // tslint:disable-next-line:interface-name
    interface Request {
      authUser?: IUserDBModel;
    }
  }
}

const DEFAULT_PORT = 3000;
const PORT = Number(process.env.SERVER_PORT) || DEFAULT_PORT;
const PREFIX = process.env.API_PREFIX || '/api';

const server = RestServer.start(express(), PORT, PREFIX);
