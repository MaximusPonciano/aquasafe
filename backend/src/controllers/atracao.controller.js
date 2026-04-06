const Atracao  = require('../models/Atracao');

const selecionarAtracao = async (req, res)=>{
    
    try{
    const atracoesdb = await Atracao .findAll({});
    res.json(atracoesdb);

    } catch{
        res.status(500).json({mensagem: "Erro inesperado no Servidor"})
    };
};

const criarAtracao = async (req, res)=>{
    const { nome, ativa } = req.body
    if(!nome){
        return res.status(400).json("Insira um nome para a atração")
    };

    try{
    const atracao = await Atracao.create({ 
        nome: nome,
        ativa: ativa });
    res.status(201).json({ mensagem: "Atração criada com sucesso!" });

    }catch{
        res.status(500).json({mensagem: "Erro inesperado no Servidor"})


    };
};



module.exports = {selecionarAtracao, criarAtracao}