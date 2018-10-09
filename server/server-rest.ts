import { Router } from './router';
import * as express from "express";
import * as http from 'http';

const PORT: number = 3000;
const PREFIX: string = "/";

export class RestServer {
  public static start(app: express.Express, port: number = PORT, routePrefix: string = PREFIX): http.Server {
    
    // IMPORTANT: Routes must be defined AFTER the initialization of the app
    // so that it can use the configured middleware!
    app.use(routePrefix, Router);

    const server = app.listen(port,()=>{
      console.log(`REST SERVER started on port ${port} !`);
    });

    this.init(app);
    this.initHeader(app);

    return server;
  }

  private static init(app: express.Express) {

  }

  private static initHeader(app: express.Express) {
    app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
      // Request methods you wish to allow
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
      if('OPTIONS' === req.method) {
          res.sendStatus(200);
      } else {
          console.log(`${req.ip} ${req.method} ${req.url}`);
          next();
      }
    });
  }
}