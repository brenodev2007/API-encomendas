import { Router } from "express";

import { deliveriesController } from "@/controllers/deliveriesController";
import { ensureAuthenticated } from "@/middlewares/ensureAuthenticated";
import { verifyUserAuthorization } from "@/middlewares/verifyUserAuthorization";

export const deliverieRoutes = Router();

const deliverieController = new deliveriesController();

deliverieRoutes.use(ensureAuthenticated, verifyUserAuthorization(["sale"]));

deliverieRoutes.post("/", deliverieController.create);
deliverieRoutes.get("/", deliverieController.index);
