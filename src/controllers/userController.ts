import { Request, Response, NextFunction } from "express";
import { hash } from "bcrypt";
import { z } from "zod";

export class userController {
  create = async (req: Request, res: Response, next: NextFunction) => {
    const bodySchema = z.object({
      name: z.string().nonempty(),
      email: z.string().email(),
      password: z.string().min(6),
    });

    const { name, email, password } = bodySchema.parse(req.body);
    const hashedPassword = await hash(password, 8);

    res.json({ message: "User created successfully", hashedPassword });
  };
}
