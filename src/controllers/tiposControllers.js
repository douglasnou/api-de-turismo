import { tipo } from "../model/Tipos.js";

export class TiposController{
    static async getTypes(req, res){
        const showTipos = await tipo.find({});
        res.status(200).json(showTipos);
    }
}