import mongoose from "mongoose";

export const destinoSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    cidade: {type: mongoose.Schema.Types.String, required: true}
}, {versionKey: false});

export const destino = mongoose.model("destinos", destinoSchema);