import express from "express";
import { CorsMiddlewares } from "../middlewares/corsMiddlewares";
import { TiposController } from "../controllers/tiposControllers";

const routes = express.Router();

routes.get("/tipos", CorsMiddlewares.corsPermission, TiposController.getTypes);

export default routes;