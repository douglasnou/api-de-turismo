import express from "express";
import { DestinosControllers } from "../controllers/destinosControllers.js";

const routes = express.Router();

routes.get("/destinos", DestinosControllers.getDestinos);
routes.post("/destinos", DestinosControllers.postDestino);
routes.put("/destinos/:id", DestinosControllers.putDestino);
routes.delete("/destinos/:id", DestinosControllers.deleteDestino);

export default routes;