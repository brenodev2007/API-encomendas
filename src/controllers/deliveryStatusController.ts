import { Request, Response, NextFunction } from "express";
import { prisma } from "@/database/prisma";
import { z } from "zod";

export class deliveryStatusController {
  update = async (req: Request, res: Response, next: NextFunction) => {
    const paramSchema = z.object({
      id: z.string().uuid(),
    });

    const bodySchema = z.object({
      status: z.enum(["processing", "shipped", "delivered"]),
    });

    const { id } = paramSchema.parse(req.params);
    const { status } = bodySchema.parse(req.body);

    await prisma.delivery.update({
      data: {
        status,
      },
      where: {
        id,
      },
    });

    await prisma.deliveryLog.create({
      data: {
        deliveryId: id,
        description: status,
      },
    });

    res.json({ message: "Status is updated" });
  };
}
