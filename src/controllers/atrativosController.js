import { atrativo } from "../model/Atrativos.js";
import { destino } from "../model/Destino.js";

export class AtrativosControllers{
    static async getAtrativos(req, res){
        const showAtrativos = await atrativo.find({});
        res.status(200).json(showAtrativos);
    };

    static async postAtrativos(req, res){
        const newAtrativo = req.body;
        try {
            const findCidade = await destino.findById(newAtrativo.cidade);
            const completeAtrativo = {...newAtrativo, cidade:{...findCidade._doc}};
            const createdAtrativo = await atrativo.create(completeAtrativo);
            res.status(201).json({message:"Atrativo adicionado com sucesso", atrativo: createdAtrativo});
        } catch (error) {
            res.status(500).json({message:`${error.message} - erro ao adicionar atrativo`});
        }
    };

    static async updateAtrativo(req, res){
        try {
            const id = req.params.id;
            await atrativo.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "atrativo atualizado."});
        } catch (error) {
            res.status(500).json({message: `${error.message} - erro ao atualizar.`});
        }
    };

    static async deleteAtrativo(req, res){
        try {
            const id = req.params.id;
            await atrativo.findByIdAndDelete(id);
            res.status(202).send("deletado.");
        } catch (error) {
            res.status(500).json({message: `${error.message} - erro ao deletar.`});
        }
    };
}