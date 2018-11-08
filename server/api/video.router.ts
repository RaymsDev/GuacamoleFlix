import { Request, Response, Router } from 'express';
import { VideoController } from './../controllers/video.controller';

import HttpStatus from 'http-status-codes';
import { IRouter } from '../models/router.interface';
import IVideoDBModel from '../schemas/video.schema';
class VideoRouter implements IRouter {

  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public list(req: Request, res: Response): void {
    VideoController.list()
      .then((data) => {
        res.status(HttpStatus.OK).json({ data });
      })
      .catch((error) => {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error });
      });
  }

  public select(req: Request, res: Response): void {
    res.sendStatus(HttpStatus.NOT_IMPLEMENTED);
  }

  public create(req: Request, res: Response): void {
    res.sendStatus(HttpStatus.NOT_IMPLEMENTED);
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

const videoRouter = new VideoRouter().router;

export default videoRouter;
