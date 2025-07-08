import { Request, Response, NextFunction } from "express";

export class deliveryLogsController {
  create = async (req: Request, res: Response, next: NextFunction) => {
    res.json({ message: "ok" });
  };
}
