import express from "express";
import destinos from "./destinosRoutes.js";
import tipos from "./tiposRoutes.js";
import atrativos from "./atrativosRoutes.js";

const routes = (app) =>{
    app.route("/").get((req, res) => res.status(200).send
    ("Sucesso ao conectar."));

    app.use(express.json(), destinos, tipos, atrativos);
    
};

export default routes;