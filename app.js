import express from "express";
import { connectToDatabase } from "./config/dbConnection.js";
import routes from "./routes/index.js";

const connection = await connectToDatabase();

connection.on("error", (error)=>{
    console.error("erro de conexão", error);
});

connection.once("open", ()=>{
    console.log("Sucesso de conexão.");
});

export const app = express();
routes(app);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});