import { Router } from "express";

import { usersRoutes } from "./users-routes";
import { sessionsRoutes } from "./sessions-routes";

const routes = Router();
routes.use("/users", usersRoutes);
routes.use("/session", sessionsRoutes);

export { routes };
