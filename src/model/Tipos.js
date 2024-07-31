import mongoose from "mongoose";

export const tipoSchema = new mongoose.Schema({
    id:{type: mongoose.Schema.Types.ObjectId},
    tipo: {type: mongoose.Schema.Types.String}
}, {versionKey: false});

export const tipo = mongoose.model("tipos", tipoSchema);