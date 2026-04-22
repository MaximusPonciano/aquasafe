import Atracao from '../models/Atracao.js';
import Pergunta from '../models/Perguntas.js';

export const criarPergunta = async (req, res)=>{
    const {pergunta, atracao_id}  = req.body;
    if(!pergunta){
        return res.status(400).json("Insira uma pergunta para a atração")

    }

    try{
        const perguntacreate = await Pergunta.create({
        pergunta: pergunta,
        atracao_id: atracao_id
    });
        
        res.status(201).json({ mensagem: "Pergunta adiciona com sucesso"})

    }catch{
        res.status(500).json({ mensagem: "Adicione uma pergunta para a atração"});
    }
    
};

export const listarPerguntas = async (req, res) =>{
    const { id } = req.params
    const perguntalist = await Pergunta.findAll({
        where:{atracao_id: id}});
    res.json(perguntalist)
    

}
