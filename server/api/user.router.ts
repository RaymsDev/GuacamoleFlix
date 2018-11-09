import { NextFunction, Request, Response, Router } from 'express';

import HttpStatus from 'http-status-codes';
import { User } from '../../both/models/user.model';
import { UserController } from '../controllers/user.controller';
import { IRouter } from '../models/router.interface';

export class UserRouter implements IRouter {

  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public list(req: Request, res: Response): void {
    UserController.list()
      .then((users) => {
        res.status(HttpStatus.OK).json(users);
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
    const user = new User(req.body);
    UserController.create(user)
      .then((createdUser) => {
        res.status(HttpStatus.OK).json(createdUser);
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
    this.router.get("/:id", this.list);
    this.router.post("/", this.create);
    this.router.put("/:id", this.update);
    this.router.delete("/:id", this.remove);
  }

}

const userRouter = new UserRouter().router;

export default userRouter;
