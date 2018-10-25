import bodyParser from 'body-parser';
import express from 'express';
import http from 'http';
import HttpStatus from 'http-status-codes';
import mongoose from "mongoose";
import { Routes } from './routes';

const PREFIX: string = "/";
const MONGO_DB_URI: string = process.env.MONGODB_URI || "mongodb://localhost:27017/guacamoleflix";
export class RestServer {
  public static start(app: express.Express, port: number, routePrefix: string = PREFIX): http.Server {

    this.init(app);
    // IMPORTANT: Routes must be defined AFTER the initialization of the app
    // so that it can use the configured middleware!
    app.use(routePrefix, Routes);

    const server = app.listen(port, () => {
      console.log(`REST SERVER started on port ${port} !`);
    });

    this.initHeader(app);

    return server;
  }

  private static init(app: express.Express): void {
    this.mongoConnection();
    // support application/json type post data
    app.use(bodyParser.json());
    // support application/x-www-form-urlencoded post data
    app.use(bodyParser.urlencoded({ extended: false }));

  }

  private static mongoConnection(): void {
    const env = process.env.ENV;
    if (env === "prod") {
      const MONGODB_HOST = process.env.MONGO_DB_HOST;
      const MONGODB_USER = process.env.MONGO_DB_USER;
      const MONGODB_PASS = process.env.MONGO_DB_PASS;
      mongoose.connect(MONGODB_HOST, {
        pass: MONGODB_PASS,
        useNewUrlParser: true,
        user: MONGODB_USER,
      })
        .catch((error) => {
          console.error(error);
        });
      return;
    }

    mongoose.connect(MONGO_DB_URI, { useNewUrlParser: true })
      .catch((error) => {
        console.error(error);
      });

  }

  private static initHeader(app: express.Express): void {
    app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
      // Request methods you wish to allow
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
      if ('OPTIONS' === req.method) {
        res.sendStatus(HttpStatus.OK);
      } else {
        console.log(`${req.ip} ${req.method} ${req.url}`);
        next();
      }
    });
  }
}