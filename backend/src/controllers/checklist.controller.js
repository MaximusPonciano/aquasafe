import Checklist from "../models/Checklist.js";
import ItemChecklist from "../models/ItemChecklist.js";

export const createChecklist = async (req, res) => {
    const {
    atracao_id: attractionId,
    data_hora: dateTime,
    observacao: observation,
  } = req.body;
  
  if( !attractionId ){
        return res.status(400).json("Insira a atração");
    }
  try{
  const userId = req.usuario.id;

const newCheckList = await Checklist.create({
    userId: userId,
    attractionId: attractionId,
    dateTime: new Date(),
    observation: observation
});
  
  const { respostas } = req.body
  
  await Promise.all(respostas.map(async (item) => {
    await ItemChecklist.create({
      checklistId: newCheckList.id,
      questionId: item.pergunta_id,
      compliant: item.conforme
    });
  }));
  res.status(201).json({ message: "Checklist criado com sucesso"});

  }catch(error){
    console.error(error);
    res.status(500).json({ message: "Erro ao criar Checklist"});
  }
};


export const getChecklist = async (req, res) =>{
  try{
  const checklist = await Checklist.findAll({
    include: [{ model: ItemChecklist }]
  });
  res.json(checklist)
 }catch{
  res.status.json({ message: "Falha ao buscar Checklist"})
  }
};

export const deleteChecklist = async (req, res) =>{
      try{
        const { id } = req.params;
        await ItemChecklist.destroy({ where: { checklistId: id } });
        await Checklist.destroy({ where: { id } });
        res.status(201).json({ message: "Checklist excluida com sucesso!" });
    } catch(error){
      console.error(error)
        res.status(500).json({ message: "Erro inesperado no Servidor" });

    };
};