import { Router } from "express";

import { sessionsController } from "@/controllers/sessionsController";

export const sessionsRoutes = Router();

const sessionController = new sessionsController();

sessionsRoutes.post("/", sessionController.create);
