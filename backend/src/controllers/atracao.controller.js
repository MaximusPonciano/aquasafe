import Attraction from '../models/Atracao.js';

export const getAttractions = async (req, res) => {
    try {
        const attractions = await Attraction.findAll({});
        res.json(attractions);
    } catch (error) {
        res.status(500).json({ message: "Erro inesperado no Servidor" });
    }
};

export const createAttraction = async (req, res) => {
    const { name, active } = req.body;
    if (!name) {
        return res.status(400).json("Insira um nome para a atração");
    }

    try {
        await Attraction.create({
            name,
            active
        });
        res.status(201).json({ message: "Atração criada com sucesso!" });
    } catch (error) {
        res.status(500).json({ message: "Erro inesperado no Servidor" });
    }
};
