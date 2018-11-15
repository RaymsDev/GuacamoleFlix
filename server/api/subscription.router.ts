import { Request, Response, Router } from 'express';

import HttpStatus from 'http-status-codes';
import { Subscription } from '../../both/models/subscription.model';
import { SubscriptionController } from '../controllers/subscription.controller';
import { IRouter } from '../models/router.interface';

export class SubscriptionRouter implements IRouter {

  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public list(req: Request, res: Response): void {
    SubscriptionController.list()
      .then((subscriptions) => {
        res.status(HttpStatus.OK).json(subscriptions);
      })
      .catch((error) => {
        console.error(error);
        res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
      });
  }

  public select(req: Request, res: Response): void {
    res.sendStatus(HttpStatus.NOT_IMPLEMENTED);
  }

  public create(req: Request, res: Response): void {
    const subscription = new Subscription(req.body);
    SubscriptionController.create(subscription)
      .then((createdSubsciption) => {
        res.status(HttpStatus.OK).json(createdSubsciption);
      })
      .catch((error) => {
        console.error(error);
        res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
      });
  }

  public update(req: Request, res: Response): void {
    res.sendStatus(HttpStatus.NOT_IMPLEMENTED);
  }

  public remove(req: Request, res: Response): void {
    res.sendStatus(HttpStatus.NOT_IMPLEMENTED);
  }

  public routes(): void {
    this.router.get("/", this.list);
    this.router.get("/:id", this.select);
    this.router.post("/", this.create);
    this.router.put("/:id", this.update);
    this.router.delete("/:id", this.remove);
  }

}

const subscriptionRouter = new SubscriptionRouter().router;

export default subscriptionRouter;
