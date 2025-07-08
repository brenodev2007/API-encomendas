import { Router } from "express";

import { deliveryLogsController } from "@/controllers/deliveryLogsController";
import { ensureAuthenticated } from "@/middlewares/ensureAuthenticated";
import { verifyUserAuthorization } from "@/middlewares/verifyUserAuthorization";

export const deliveryLogsRoutes = Router();
const deliveryLogController = new deliveryLogsController();

deliveryLogsRoutes.post(
  "/",
  ensureAuthenticated,
  verifyUserAuthorization(["sale"]),
  deliveryLogController.create
);
