import { Request, Response, NextFunction } from "express";
import { z } from "zod";
import { prisma } from "@/database/prisma";

export class deliveriesController {
  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const bodySchema = z.object({
        user_id: z.string().uuid(),
        description: z.string(),
      });

      const { user_id, description } = bodySchema.parse(req.body);

      await prisma.delivery.create({
        data: {
          userId: user_id,
          description: description,
        },
      });

      res.json({ message: "Created" });
    } catch (error) {
      next(error);
    }
  };

  index = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const deliveries = await prisma.delivery.findMany();

      res.json({ deliveries });
    } catch (error) {
      next(error);
    }
  };
}
