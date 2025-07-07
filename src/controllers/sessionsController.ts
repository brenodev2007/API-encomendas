import { Request, Response, NextFunction } from "express";

export class sessionsController {
  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json({ message: "Session created" });
    } catch (error) {
      next(error);
    }
  };
}
