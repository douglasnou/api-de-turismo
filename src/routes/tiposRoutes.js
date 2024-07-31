import express from "express";
import { CorsMiddlewares } from "../middlewares/corsMiddlewares.js";
import { TiposController } from "../controllers/tiposControllers.js";

const routes = express.Router();

routes.get("/tipos", CorsMiddlewares.corsPermission, TiposController.getTypes);

export default routes;