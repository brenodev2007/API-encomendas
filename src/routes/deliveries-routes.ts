import { Router } from "express";

import { deliveriesController } from "@/controllers/deliveriesController";
import { ensureAuthenticated } from "@/middlewares/ensureAuthenticated";
import { verifyUserAuthorization } from "@/middlewares/verifyUserAuthorization";
import { deliveryStatusController } from "@/controllers/deliveryStatusController";

export const deliverieRoutes = Router();

const deliverieController = new deliveriesController();
const deliverieStatusController = new deliveryStatusController();

deliverieRoutes.use(ensureAuthenticated, verifyUserAuthorization(["sale"]));

deliverieRoutes.post("/", deliverieController.create);
deliverieRoutes.get("/", deliverieController.index);
deliverieRoutes.patch("/:id/status", deliverieStatusController.update);
