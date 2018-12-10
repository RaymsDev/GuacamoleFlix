import { Request, Response, Router } from 'express';
import { UserController } from './../controllers/user.controller';

import HttpStatus from 'http-status-codes';
import { User } from '../../both/models/user.model';
import auth from '../helpers/authentication.helper';
import { IRouter } from '../models/router.interface';
class UserRouter implements IRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();

  }

  public list(req: Request, res: Response): void {
    UserController.list()
      .then((userList) => {
        res.status(HttpStatus.OK).json(userList);
      })
      .catch((error) => {
        console.error(error);
        res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
      });
  }

  public select(req: Request, res: Response): void {
    const id = req.params.id;

    if (!id) {
      console.error("User Id is missing");
      res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
      return;
    }

    UserController.select(id)
      .then((data) => {
        res.status(HttpStatus.OK).json(data);
      })
      .catch((error) => {
        console.error(error);
        res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
      });
  }
  public selectCurrent(req: Request, res: Response): void {
    const firebaseId = req.params.id;

    if (!firebaseId) {
      console.error("User firebaseId is missing");
      res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
      return;
    }

    UserController.selectCurrent(firebaseId)
      .then((data) => {
        res.status(HttpStatus.OK).json(data);
      })
      .catch((error) => {
        console.error(error);
        res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
      });
  }

  public create(req: Request, res: Response): void {
    const user = new User(req.body);

    if (!user) {
      console.error("User body is missing");
      res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
      return;
    }

    auth.getFirebaseId(req)
      .then((firebaseId) => {
        user.idFirebase = firebaseId;
        return UserController.create(user);
      })
      .then((createdUser) => {
        res.status(HttpStatus.OK).json(createdUser);
      })
      .catch((error) => {
        console.error(error);
        res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
      });

  }

  public update(req: Request, res: Response): void {
    const user = new User(req.body);
    const id = req.params.id;
    if (!user || !id) {
      console.error("User body or id is missing");
      res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
      return;
    }

    UserController.update(id, user)
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
      console.error("User Id is missing");
      res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
      return;
    }

    UserController.remove(id)
      .then(() => res.sendStatus(HttpStatus.OK))
      .catch(() => res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR));
  }

  public routes(): void {
    this.router.get("/", auth.isAuth, auth.isAdmin, this.list);
    this.router.get("/:id", auth.isAuth, auth.isAdmin, this.select);
    this.router.get("/current/:id", auth.isAuth, this.selectCurrent);
    this.router.post("/", auth.isAuthBeforeCreate, this.create);
    this.router.put("/:id", auth.isAuth, auth.isAdmin, this.update);
    this.router.delete("/:id", auth.isAuth, auth.isAdmin, this.remove);
  }

}

const userRouter = new UserRouter().router;

export default userRouter;
