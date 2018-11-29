import { Request, Response, Router } from 'express';
import HttpStatus from 'http-status-codes';
import { Profile } from '../../both/models/profile.model';
import { ProfileController } from '../controllers/profile.controller';
import { IRouter } from '../models/router.interface';
export class ProfileRouter implements IRouter {

  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public list(req: Request, res: Response): void {
    ProfileController.list()
      .then((profileList) => {
        res.status(HttpStatus.OK).json(profileList);
      })
      .catch((error) => {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error });
      });
  }

  public select(req: Request, res: Response): void {
    const id = req.params.id;

    if (!id) {
      console.error("Profile Id is missing");
      res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
      return;
    }

    ProfileController.select(id)
      .then((data) => {
        res.status(HttpStatus.OK).json({ data });
      })
      .catch((error) => {
        console.error(error);
        res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
      });
  }

  public create(req: Request, res: Response): void {
    const profile = new Profile(req.body);

    if (!profile) {
      console.error("Profile body is missing");
      res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
      return;
    }

    ProfileController.create(profile)
      .then((createdProfile) => {
        res.status(HttpStatus.OK).json(createdProfile);
      })
      .catch((error) => {
        console.error(error);
        res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
      });

  }

  public update(req: Request, res: Response): void {
    const profile = new Profile(req.body);
    const id = req.params.id;
    if (!profile || !id) {
      console.error("Profile body or id is missing");
      res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
      return;
    }

    ProfileController.update(id, profile)
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
      console.error("Profile Id is missing");
      res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
      return;
    }

    ProfileController.remove(id)
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

const profileRouter = new ProfileRouter().router;

export default profileRouter;
