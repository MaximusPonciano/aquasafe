import Checklist from "../models/Checklist.js";
import { messages } from "../config/constants.js";
import ItemChecklist from "../models/ItemChecklist.js";

export const createChecklist = async (req, res) => {
  const { attractionId, dateTime, observation } = req.body;

  if (!attractionId) {
    return res.status(400).json({ message: messages.checklist.requiredAttraction });
  }
  try {
    const userId = req.usuario.id;

    const newCheckList = await Checklist.create({
      userId: userId,
      attractionId: attractionId,
      dateTime: new Date(),
      observation: observation,
    });

    const { respostas } = req.body;

    await Promise.all(
      respostas.map(async (item) => {
        await ItemChecklist.create({
          checklistId: newCheckList.id,
          questionId: item.pergunta_id,
          compliant: item.conforme,
        });
      }),
    );
    res.status(201).json({ message: messages.checklist.created });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: messages.checklist.createError });
  }
};

export const getChecklist = async (req, res) => {
  try {
    const checklist = await Checklist.findAll({
      include: [{ model: ItemChecklist }],
    });
    res.json(checklist);
  } catch {
    res.status.json({ message: messages.checklist.fetchError });
  }
};

export const deleteChecklist = async (req, res) => {
  try {
    const { id } = req.params;
    await ItemChecklist.destroy({ where: { checklistId: id } });
    await Checklist.destroy({ where: { id } });
    res.status(201).json({ message: messages.checklist.fetchError });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: messages.common.serverError });
  }
};
