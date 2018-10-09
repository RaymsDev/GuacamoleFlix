
import { HomeController } from "./controllers/home.controller";
import express from "express";

const app = express();

app.get("/", (req: express.Request, res: express.Response) => {
  res.status(200).json({
    home: "/home",
  });
});

app.get(
  "/home",
  (req: express.Request, res: express.Response) => {

     HomeController.Get().then(results=>{
      res.status(200).json({
        data: results
      });
    })
    .catch(error=>{
      console.log(error);
      res.sendStatus(500);
    });
  
  }
);

export var Router: express.Express = app;