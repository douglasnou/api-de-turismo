import { destino } from "../model/Destino.js";

export class DestinosControllers{
    static async getDestinos(req, res){
        const showDestinos = await destino.find({});
        res.status(200).json(showDestinos);
    };

    static async postDestino(req, res){
        try {
            const inserirDestino = await destino.create(req.body);
            res.status(201).json({message: "cidade adicionada com sucesso", destino: inserirDestino});
        } catch (error) {
            res.status(500).json({message:`${error.message} - erro ao cadastrar cidade`})
        }
    };

    static async putDestino(req, res){
        const id = req.params.id;
        try {
            const updateDestinos = destino.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Cidade atualizada."});
        } catch (error) {
            res.status(500).json({message: `${error.message} - erro ao atualizar cidade.`})
        }
    };

    static async deleteDestino(req, res){
        const id = req.params.id;
        try {
            const deletarDestino = destino.findByIdAndDelete(id);
            res.status(202).send("Cidade deletada.");
        } catch (error) {
            res.status(500).json({message: `${error.message} - erro ao deletar cidade.`});  
        }
    };
}