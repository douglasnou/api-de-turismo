import express from "express";
import { AtrativosControllers } from "../controllers/atrativosController.js";
import { CorsMiddlewares } from "../middlewares/corsMiddlewares.js";

const routes = express.Router();

routes.get("/atrativos", CorsMiddlewares.corsPermission, AtrativosControllers.getAtrativos);
routes.post("/atrativos", CorsMiddlewares.corsPermission, AtrativosControllers.postAtrativos);
routes.put("/atrativos/:id", CorsMiddlewares.corsPermission, AtrativosControllers.updateAtrativo);
routes.delete("/atrativos/:id", CorsMiddlewares.corsPermission, AtrativosControllers.deleteAtrativo);

export default routes;