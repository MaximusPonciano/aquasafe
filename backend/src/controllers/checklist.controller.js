import Checklist from "../models/Checklist.js";
import ItemChecklist from "../models/ItemChecklist.js";

export const createChecklist = async (req, res) => {
  const {
    usuario_id: userId,
    atracao_id: attractionId,
    data_hora: dateTime,
    respota: response,
    observacao: observation,
  } = req.body;

};
