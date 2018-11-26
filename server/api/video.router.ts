import { Request, Response, Router } from "express";
import { VideoController } from "./../controllers/video.controller";

import HttpStatus from "http-status-codes";
import { Video } from "../../both/models/video.model";
import { IRouter } from "../models/router.interface";
class VideoRouter implements IRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public list(req: Request, res: Response): void {
    VideoController.list()
      .then((videoList) => {
        res.status(HttpStatus.OK).json(videoList);
      })
      .catch((error) => {
        console.error(error);
        res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
      });
  }

  public selectByCategory(req: Request, res: Response): void {
    const categoryId = req.params.id;

    if (!categoryId) {
      console.error("Categogy Id is missing");
      res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
      return;
    }

    VideoController.selectByCategory(categoryId)
      .then((data) => {
        res.status(HttpStatus.OK).json(data);
      })
      .catch((error) => {
        console.error(error);
        res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
      });
  }

  public select(req: Request, res: Response): void {
    const id = req.params.id;

    if (!id) {
      console.error("Video Id is missing");
      res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
      return;
    }

    VideoController.select(id)
      .then((data) => {
        res.status(HttpStatus.OK).json(data);
      })
      .catch((error) => {
        console.error(error);
        res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
      });
  }

  public create(req: Request, res: Response): void {
    const video = new Video(req.body);

    if (!video) {
      console.error("Video body is missing");
      res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
      return;
    }

    VideoController.create(video)
      .then((createdVideo) => {
        res.status(HttpStatus.OK).json(createdVideo);
      })
      .catch((error) => {
        console.error(error);
        res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
      });
  }

  public update(req: Request, res: Response): void {
    const video = new Video(req.body);
    const id = req.params.id;
    if (!video || !id) {
      console.error("Video body or id is missing");
      res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
      return;
    }

    VideoController.update(id, video)
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
      console.error("Video Id is missing");
      res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
      return;
    }

    VideoController.remove(id)
      .then(() => res.sendStatus(HttpStatus.OK))
      .catch(() => res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR));
  }

  public routes(): void {
    this.router.get("/", this.list);
    this.router.get("/:id", this.select);
    this.router.get("/ByCategory/:id", this.selectByCategory);
    this.router.post("/", this.create);
    this.router.put("/:id", this.update);
    this.router.delete("/:id", this.remove);
  }
}

const videoRouter = new VideoRouter().router;

export default videoRouter;
