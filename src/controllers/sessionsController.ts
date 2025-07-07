import { Request, Response, NextFunction } from "express";
import { prisma } from "@/database/prisma";
import { z } from "zod";
import { AppError } from "@/utils/AppError";
import { compare, hash } from "bcrypt";
import jwt from "jsonwebtoken";
import { authConfig } from "@/configs/auth";

export class sessionsController {
  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const bodySchema = z.object({
        email: z.string().email(),
        password: z.string(),
      });
      const { email, password } = bodySchema.parse(req.body);

      const user = await prisma.user.findFirst({ where: { email } });

      if (!user) {
        throw new AppError(
          "Ocorreu um erro inesperado, verifique os dados",
          401
        );
      }

      const passwordMatched = await compare(password, user.password);

      if (!passwordMatched) {
        throw new AppError("Senha inválida", 401);
      }

      const { secret, expiresIn } = authConfig.jwt;

      if (!secret) throw new Error("JWT_SECRET não configurado");

      const token = jwt.sign({ role: user.role ?? "customer" }, secret, {
        subject: String(user.id),
        expiresIn,
      });
      res.json({ token });
    } catch (error) {
      next(error);
    }
  };
}
