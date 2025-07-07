import { Request, Response, NextFunction } from "express";
import { prisma } from "@/database/prisma";
import { hash } from "bcrypt";
import { z } from "zod";

export class userController {
  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const bodySchema = z.object({
        name: z.string().nonempty(),
        email: z.string().email(),
        password: z.string().min(6),
      });

      const { name, email, password } = bodySchema.parse(req.body);
      const hashedPassword = await hash(password, 8);

      const user = prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
        },
      });

      res.json({ message: "User created successfully", user });
    } catch (error) {
      next(error);
    }
  };
}
