import { Router } from "express";

import openRoutes from "./openRoutes";
import authenticatedRoutes from "./authenticatedRoutes";
import userAuthenticationMiddleware from "../middlewares/userAuthenticationMiddleware";

const routes = Router();

routes.use("/open", openRoutes);
routes.use("/auth", userAuthenticationMiddleware, authenticatedRoutes);

export default routes;
