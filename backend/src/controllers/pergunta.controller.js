import Question from "../models/Perguntas.js";

export const createQuestion = async (req, res) => {
  const { pergunta: questionText, atracao_id: attractionId } = req.body;

  if (!questionText) {
    return res.status(400).json("Adicine uma pergunta para a atração");
  }

  try {
    await Question.create({
      questionText,
      attractionId,
    });

    res.status(201).json({ message: "Pergunta adicionada com Sucesso!" });
  } catch (error) {
    res.status(500).json({ message: "Falha ao adicionar a pergunta"});
  }
};

export const listQuestions = async (req, res) => {
  const { id } = req.params;
  const questionList = await Question.findAll({
    where: { attractionId: id },
  });
  res.json(questionList);
};
