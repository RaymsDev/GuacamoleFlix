import { Request, Response, Router } from "express";
import { VideoController } from "./../controllers/video.controller";

import HttpStatus from "http-status-codes";
import { Video } from "../../both/models/video.model";
import auth from "../helpers/authentication.helper";
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
  public getVideosByCategories(req: Request, res: Response): void {
    const categoryIdListUnparsed: string = req.params.categoryIdList;
    const categoryIdList = categoryIdListUnparsed.split(',');

    if (!categoryIdList) {
      console.error("Categogy Id List is missing");
      res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
      return;
    }

    VideoController.getVideosByCategories(categoryIdList)
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
    const userId = req.authUser._id;
    if (!id) {
      console.error("Video Id is missing");
      res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
      return;
    }

    VideoController.select(id, userId)
      .then((data) => {
        res.status(HttpStatus.OK).json(data);
      })
      .catch((error) => {
        console.error(error);
        res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
      });
  }

  public spotlight(req: Request, res: Response): void {

    VideoController.spotlight()
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
  public like(req: Request, res: Response): void {
    const videoId = req.params.videoId;
    const userId = req.authUser._id;
    if (!videoId) {
      console.error("Videoid is missing");
      res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
      return;
    }

    VideoController.like(videoId, userId)
      .then((isLiked) => {
        res.status(HttpStatus.OK).json(isLiked);
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
      .then(() => res.sendStatus(HttpStatus.NO_CONTENT))
      .catch(() => res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR));
  }

  public routes(): void {
    this.router.get("/", this.list);
    this.router.get("/spotlight", this.spotlight);
    this.router.get("/:id", this.select);
    this.router.get("/ByCategory/:id", this.selectByCategory);
    this.router.get("/RelatedVideos/:categoryIdList", this.getVideosByCategories);
    this.router.post("/", auth.isAdmin, this.create);
    this.router.post("/like/:videoId", this.like);
    this.router.put("/:id", auth.isAdmin, this.update);
    this.router.delete("/:id", auth.isAdmin, this.remove);
  }
}

const videoRouter = new VideoRouter().router;

export default videoRouter;
