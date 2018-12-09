import { Request, Response, Router } from 'express';

import HttpStatus from 'http-status-codes';
import { Subscription } from '../../both/models/subscription.model';
import { SubscriptionController } from '../controllers/subscription.controller';
import auth from '../helpers/authentication.helper';
import { IRouter } from '../models/router.interface';

export class SubscriptionRouter implements IRouter {

  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public list(req: Request, res: Response): void {
    SubscriptionController.list()
      .then((subscriptionList) => {
        res.status(HttpStatus.OK).json(subscriptionList);
      })
      .catch((error) => {
        console.error(error);
        res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
      });
  }

  public select(req: Request, res: Response): void {
    const id = req.params.id;

    if (!id) {
      console.error("Subscription Id is missing");
      res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
      return;
    }

    SubscriptionController.select(id)
      .then((data) => {
        res.status(HttpStatus.OK).json({ data });
      })
      .catch((error) => {
        console.error(error);
        res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
      });
  }

  public create(req: Request, res: Response): void {
    const subscription = new Subscription(req.body);

    if (!subscription) {
      console.error("Subscription body is missing");
      res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
      return;
    }

    SubscriptionController.create(subscription)
      .then((createdSubscription) => {
        res.status(HttpStatus.OK).json(createdSubscription);
      })
      .catch((error) => {
        console.error(error);
        res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
      });

  }

  public update(req: Request, res: Response): void {
    const subscription = new Subscription(req.body);
    const id = req.params.id;
    if (!subscription || !id) {
      console.error("Subscription body or id is missing");
      res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
      return;
    }

    SubscriptionController.update(id, subscription)
      .then(() => {
        res.sendStatus(HttpStatus.OK);
      })
      .catch((error) => {
        console.error(error);
        res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
      });
  }

  public remove(req: Request, res: Response): void {
    const id = req.params.id;

    if (!id) {
      console.error("Subscription Id is missing");
      res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
      return;
    }

    SubscriptionController.remove(id)
      .then(() => res.sendStatus(HttpStatus.OK))
      .catch(() => res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR));
  }

  public routes(): void {
    this.router.get("/", this.list);
    this.router.get("/:id", this.select);
    this.router.post("/", auth.isAdmin, this.create);
    this.router.put("/:id", auth.isAdmin, this.update);
    this.router.delete("/:id", auth.isAdmin, this.remove);
  }

}

const subscriptionRouter = new SubscriptionRouter().router;

export default subscriptionRouter;
