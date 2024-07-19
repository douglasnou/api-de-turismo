import mongoose from "mongoose";
import { destinoSchema } from "./Destino.js";

const atrativosSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    tipo: {type: mongoose.Schema.Types.String},
    nome: {type: mongoose.Schema.Types.String, required: true},
    endereco: {type: mongoose.Schema.Types.String},
    sobre: {type: mongoose.Schema.Types.String},
    dicas: {type:mongoose.Schema.Types.String},
    lat: {type: mongoose.Schema.Types.String},
    ltn: {type: mongoose.Schema.Types.String},
    imagem: {type: mongoose.Schema.Types.String},
    cidade: destinoSchema
}, {versionKey: false});

export const atrativo = mongoose.model("atrativos", atrativosSchema);