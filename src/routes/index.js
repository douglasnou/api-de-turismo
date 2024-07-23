import express from "express";
import destinos from "./destinosRoutes.js";
import atrativos from "./atrativosRoutes.js";
import cors from "cors";

const routes = (app) =>{
    app.route("/").get((req, res) => res.status(200).send
    ("Sucesso ao conectar."));

    app.use(express.json(), destinos, atrativos);

    app.use((res, req, next)=>{
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
        res.header("Access-Control-Allow-Headers", "Content-Type");

        app.use(cors());

        next();
    })
    
};

export default routes;