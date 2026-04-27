import Attraction from '../models/Atracao.js';
import { messages } from '../config/constants.js';

export const getAttractions = async (req, res) => {
    try {
        const attractions = await Attraction.findAll({});
        res.json(attractions);
    } catch (error) {
        res.status(500).json({ message: messages.common.ServerError });
    }
};

export const createAttraction = async (req, res) => {
    const { nome: name, ativa: active } = req.body;
    if (!name) {
        return res.status(400).json({ message: messages.attraction.requiredName});
    }

    try {
        await Attraction.create({ name, active });
        res.status(201).json({ message: messages.attraction.created });
    } catch (error) {
        res.status(500).json({ message: messages.common.ServerError });
    }
};

export const deleteAtrraction = async (req, res) =>{
    try{
        const { id } = req.params;
        await Attraction.destroy({ 
            where: { id },
         });
        res.status(201).json({ message: messages.attraction.deleted });
    } catch {
        res.status(500).json({ message: messages.common.ServerError });


    }
};