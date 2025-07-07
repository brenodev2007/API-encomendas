import { Router } from "express";
import { userController } from "@/controllers/userController";

export const usersRoutes = Router();

const usersController = new userController();

usersRoutes.post("/", usersController.create);
