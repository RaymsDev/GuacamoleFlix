import { Request, Response, Router } from 'express';

import HttpStatus from 'http-status-codes';
import { IRouter } from '../models/router.interface';

export class SubscriptionRouter implements IRouter {

    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public list(req: Request, res: Response): void {
        res.status(HttpStatus.NOT_IMPLEMENTED);
    }

    public select(req: Request, res: Response): void {
        res.status(HttpStatus.NOT_IMPLEMENTED);
    }

    public create(req: Request, res: Response): void {
        res.status(HttpStatus.NOT_IMPLEMENTED);
    }

    public update(req: Request, res: Response): void {
        res.status(HttpStatus.NOT_IMPLEMENTED);
    }

    public remove(req: Request, res: Response): void {
        res.status(HttpStatus.NOT_IMPLEMENTED);
    }

    public routes(): void {
        this.router.get("/", this.list);
        this.router.get("/:id", this.list);
        this.router.post("/", this.create);
        this.router.put("/:id", this.update);
        this.router.delete("/:id", this.remove);
    }

}

const subscriptionRouter = new SubscriptionRouter().router;

export default subscriptionRouter;