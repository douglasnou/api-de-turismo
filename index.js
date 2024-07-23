import express from "express";
import destinos from "./destinosRoutes.js";
import atrativos from "./atrativosRoutes.js";
import cors from "cors";

const routes = (app) =>{
    app.route("/").get((req, res) => res.status(200).send
    ("Sucesso ao conectar."));

    app.use(express.json(), destinos, atrativos);
    app.use(cors({
        origin: "*"
    }));
};

export default routes;