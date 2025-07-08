import { Router } from "express";

import { usersRoutes } from "./users-routes";
import { sessionsRoutes } from "./sessions-routes";
import { deliverieRoutes } from "./deliveries-routes";
import { deliveryLogsRoutes } from "./delivery-logs-routes";

const routes = Router();
routes.use("/users", usersRoutes);
routes.use("/session", sessionsRoutes);
routes.use("/deliveries", deliverieRoutes);
routes.use("/delivery-logs", deliveryLogsRoutes);

export { routes };
