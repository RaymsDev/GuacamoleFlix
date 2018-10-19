import { Request, Response, Router } from 'express';
import { VideoController } from './../controllers/video.controller';

import { IRouter } from '../models/router.interface';
import IVideoDBModel from '../schemas/video.schema';

const ERROR_STATUS = 500;
const SUCCESS_STATUS = 200;
class VideoRouter implements IRouter {

    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public list(req: Request, res: Response): void {
        VideoController.list()
            .then((data) => {
                res.status(SUCCESS_STATUS).json({ data });
            })
            .catch((error) => {
                res.status(ERROR_STATUS).json({ error });
            });
    }

    public select(req: Request, res: Response): void {
        res.status(ERROR_STATUS).json({ error: "NOT IMPLEMENTED" });
    }

    public create(req: Request, res: Response): void {
        res.status(ERROR_STATUS).json({ error: "NOT IMPLEMENTED" });
    }

    public update(req: Request, res: Response): void {
        res.status(ERROR_STATUS).json({ error: "NOT IMPLEMENTED" });
    }

    public remove(req: Request, res: Response): void {
        res.status(ERROR_STATUS).json({ error: "NOT IMPLEMENTED" });
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