const Atracao  = require('../models/Atracao');

const selecionarAtracao = async (req, res)=>{
    const atracoesdb = await Atracao .findAll({});
    
    res.json(atracoesdb)
};

const criarAtracao = async (req, res)=>{
    const { nome, ativa } = req.body
    const atracao = await Atracao.create({ 
        nome: nome,
        ativa: ativa });
    res.status(201).json({ mensagem: "Atração criada com sucesso!" })
};



module.exports = {selecionarAtracao, criarAtracao}