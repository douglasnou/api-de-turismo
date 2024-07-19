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