import { Request, Response, Router } from 'express';
import HttpStatus from 'http-status-codes';
import { Category } from '../../both/models/category.model';
import { CategoryController } from '../controllers/category.controller';
import auth from '../helpers/authentication.helper';
import { IRouter } from '../models/router.interface';
export class CategoryRouter implements IRouter {

  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public list(req: Request, res: Response): void {
    CategoryController.list()
      .then((categoryList) => {
        res.status(HttpStatus.OK).json(categoryList);
      })
      .catch((error) => {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error });
      });
  }

  public select(req: Request, res: Response): void {
    const id = req.params.id;

    if (!id) {
      console.error("Category Id is missing");
      res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
      return;
    }

    CategoryController.select(id)
      .then((data) => {
        res.status(HttpStatus.OK).json({ data });
      })
      .catch((error) => {
        console.error(error);
        res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
      });
  }

  public create(req: Request, res: Response): void {
    const category = new Category(req.body);

    if (!category) {
      console.error("Category body is missing");
      res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
      return;
    }

    CategoryController.create(category)
      .then((createdCategory) => {
        res.status(HttpStatus.OK).json(createdCategory);
      })
      .catch((error) => {
        console.error(error);
        res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
      });

  }

  public update(req: Request, res: Response): void {
    const category = new Category(req.body);
    const id = req.params.id;
    if (!category || !id) {
      console.error("Category body or id is missing");
      res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
      return;
    }

    CategoryController.update(id, category)
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
      console.error("Category Id is missing");
      res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
      return;
    }

    CategoryController.remove(id)
      .then(() => res.sendStatus(HttpStatus.OK))
      .catch(() => res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR));
  }

  public routes(): void {
    this.router.get("/", this.list);
    this.router.get("/:id", this.select);
    this.router.post("/", auth.isAdmin, this.create);
    this.router.put("/:id", auth.isAdmin, this.update);
    this.router.delete("/:id", auth.isAdmin, this.remove);
  }

}

const categoryRouter = new CategoryRouter().router;

export default categoryRouter;
