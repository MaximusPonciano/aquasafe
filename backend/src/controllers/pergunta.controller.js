import Question from "../models/Perguntas.js";
import { messages } from "../config/constants.js";

export const createQuestion = async (req, res) => {
  const { questionText, attractionId } = req.body;

  if (!questionText) {
    return res.status(400).json({ message: messages.question.requiredText });
  }

  try {
    await Question.create({ questionText, attractionId });

    res.status(201).json({ message: messages.question.created });
  } catch (error) {
    res.status(500).json({ message: messages.question.fetchError });
  }
};

export const listQuestions = async (req, res) => {
  const { id } = req.params;
  const questionList = await Question.findAll({
    where: { attractionId: id },
  });
  res.json(questionList);
};

export const deleteQuestions = async (req, res) => {
  try {
    const { id } = req.params;
    await Question.destroy({
      where: { id },
    });
    res.status(200).json({ message: messages.question.deleted });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: messages.common.ServerError });
  }
};
