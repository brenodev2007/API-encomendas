import { Request, Response, NextFunction } from "express";

export class userController {
  create = async (req: Request, res: Response, next: NextFunction) => {
    res.json({ message: "User created successfully" });
  };
}
