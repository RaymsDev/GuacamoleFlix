import { VideoController } from './../controllers/video.controller';
import { Router, Request, Response } from 'express';

import IVideoDBModel from '../schemas/video.schema';
import { IRouter } from '../models/router.interface';

class VideoRouter implements IRouter {

    public router: Router; en

    constructor() {
        this.router = Router();
        this.routes();
    }

    public list(req: Request, res: Response): void {
        VideoController.list()
            .then((data) => {
                res.status(200).json({ data });
            })
            .catch((error) => {
                res.status(500).json({ error });
            });
    }

    public select(req: Request, res: Response): void {
        res.status(500).json({ error: "NOT IMPLEMENTED" });
    }

    public create(req: Request, res: Response): void {
        res.status(500).json({ error: "NOT IMPLEMENTED" });
    }

    public update(req: Request, res: Response): void {
        res.status(500).json({ error: "NOT IMPLEMENTED" });
    }

    public remove(req: Request, res: Response): void {
        res.status(500).json({ error: "NOT IMPLEMENTED" });
    }

    public routes() {
        this.router.get("/", this.list);
        this.router.get("/:id", this.list);
        this.router.post("/", this.create);
        this.router.put("/:id", this.update);
        this.router.delete("/:id", this.remove);
    };

}

const videoRouter = new VideoRouter().router;

export default videoRouter;