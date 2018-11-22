import { Request, Response, Router } from 'express';
import HttpStatus from 'http-status-codes';
import { Like } from '../../both/models/like.model';
import { LikeController } from '../controllers/like.controller';
import { IRouter } from '../models/router.interface';
export class LikeRouter implements IRouter {

  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public list(req: Request, res: Response): void {
    LikeController.list()
      .then((likeList) => {
        res.status(HttpStatus.OK).json(likeList);
      })
      .catch((error) => {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error });
      });
  }

  public select(req: Request, res: Response): void {
    const id = req.params.id;

    if (!id) {
      console.error("Like Id is missing");
      res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
      return;
    }

    LikeController.select(id)
      .then((data) => {
        res.status(HttpStatus.OK).json({ data });
      })
      .catch((error) => {
        console.error(error);
        res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
      });
  }

  public create(req: Request, res: Response): void {
    const like = new Like(req.body);

    if (!like) {
      console.error("Like body is missing");
      res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
      return;
    }

    LikeController.create(like)
      .then((createdLike) => {
        res.status(HttpStatus.OK).json(createdLike);
      })
      .catch((error) => {
        console.error(error);
        res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
      });

  }

  public update(req: Request, res: Response): void {
    const like = new Like(req.body);
    const id = req.params.id;
    if (!like || !id) {
      console.error("Like body or id is missing");
      res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
      return;
    }

    LikeController.update(id, like)
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
      console.error("Like Id is missing");
      res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
      return;
    }

    LikeController.remove(id)
      .then(() => res.sendStatus(HttpStatus.OK))
      .catch(() => res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR));
  }

  public routes(): void {
    this.router.get("/", this.list);
    this.router.get("/:id", this.select);
    this.router.post("/", this.create);
    this.router.put("/:id", this.update);
    this.router.delete("/:id", this.remove);
  }

}

const likeRouter = new LikeRouter().router;

export default likeRouter;
