import { Response } from 'express';
import { Request } from 'express';
import { Router } from 'express';

export interface IRouter {
  router: Router;
  list: (req: Request, res: Response) => void;
  select: (req: Request, res: Response) => void;
  create: (req: Request, res: Response) => void;
  update: (req: Request, res: Response) => void;
  remove: (req: Request, res: Response) => void;
  routes: () => void;
}
