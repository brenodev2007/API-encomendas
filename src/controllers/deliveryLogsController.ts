import { prisma } from "@/database/prisma";
import { AppError } from "@/utils/AppError";
import { Request, Response, NextFunction } from "express";
import z from "zod";

export class deliveryLogsController {
  create = async (req: Request, res: Response, next: NextFunction) => {
    const bodySchema = z.object({
      delivery_id: z.string().uuid(),
      description: z.string(),
    });

    const { delivery_id, description } = bodySchema.parse(req.body);

    const delivery = await prisma.delivery.findUnique({
      where: {
        id: delivery_id,
      },
    });

    if (!delivery) {
      throw new AppError("delivery not found", 404);
    }

    if (delivery.status === "shipped") {
      throw new AppError("this order has already been delivered ");
    }

    if (delivery.status === "processing") {
      throw new AppError("change status to shipped ");
    }

    await prisma.deliveryLog.create({
      data: {
        deliveryId: delivery_id,
        description,
      },
    });
    res.json();
  };

  show = async (req: Request, res: Response, next: NextFunction) => {
    const paramSchema = z.object({
      delivery_id: z.string().uuid(),
    });

    const { delivery_id } = paramSchema.parse(req.params);

    const delivery = await prisma.delivery.findUnique({
      where: {
        id: delivery_id,
      },
      include: {
        logs: true,
        user: true,
      },
    });

    if (req.user?.role === "customer" && req.user.id !== delivery?.userId) {
      throw new AppError("The user can only view their deliveries", 401);
    }

    res.json(delivery);
  };
}
