import { Router } from "express";

import { usersRoutes } from "./users-routes";
import { sessionsRoutes } from "./sessions-routes";
import { deliverieRoutes } from "./deliveries-routes";

const routes = Router();
routes.use("/users", usersRoutes);
routes.use("/session", sessionsRoutes);
routes.use("/deliveries", deliverieRoutes);

export { routes };
