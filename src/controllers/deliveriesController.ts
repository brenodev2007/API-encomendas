import { Request, Response, NextFunction } from "express";

export class deliveriesController {
  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json({ message: "ok" });
    } catch (error) {
      next(error);
    }
  };
}
