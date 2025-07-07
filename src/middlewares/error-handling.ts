import { Request, Response, NextFunction } from "express";
import { AppError } from "@/utils/AppError";

export function errorHandling(
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  if (error instanceof AppError) {
    res.status(error.statusCode).json({ message: error.message });
  } else {
    res.status(500).json({ message: "Internal Server Error" });
  }
}
