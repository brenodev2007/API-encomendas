import { Router } from "express";

import { deliveriesController } from "@/controllers/deliveriesController";
import { ensureAuthenticated } from "@/middlewares/ensureAuthenticated";

export const deliverieRoutes = Router();

const deliverieController = new deliveriesController();

deliverieRoutes.use(ensureAuthenticated);

deliverieRoutes.post("/", deliverieController.create);
