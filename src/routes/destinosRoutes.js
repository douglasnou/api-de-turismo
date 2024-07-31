import express from "express";
import { DestinosControllers } from "../controllers/destinosControllers.js";
import { CorsMiddlewares } from "../middlewares/corsMiddlewares.js";

const routes = express.Router();

routes.get("/destinos", CorsMiddlewares.corsPermission, DestinosControllers.getDestinos);
routes.post("/destinos", CorsMiddlewares.corsPermission, DestinosControllers.postDestino);
routes.put("/destinos/:id", CorsMiddlewares.corsPermission, DestinosControllers.putDestino);
routes.delete("/destinos/:id", CorsMiddlewares.corsPermission, DestinosControllers.deleteDestino);

export default routes;