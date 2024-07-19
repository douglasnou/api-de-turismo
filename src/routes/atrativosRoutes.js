import express from "express";
import { AtrativosControllers } from "../controllers/atrativosController.js";

const routes = express.Router();

routes.get("/atrativos", AtrativosControllers.getAtrativos);
routes.post("/atrativos", AtrativosControllers.postAtrativos);
routes.put("/atrativos/:id", AtrativosControllers.updateAtrativo);
routes.delete("/atrativos/:id", AtrativosControllers.deleteAtrativo);

export default routes;