const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWT = process.env.JWT_SECRET;

const autenticar = (req, res, next) => {
    //Pego o header da requiçao
    const authHeader = req.headers.authorization

    //Valido se ele existe
    if(!authHeader){
        return res.status(401).json("Usuario não autenticado");
    }
    //Pego o token de acesso
     const token = authHeader.split(' ')[1]
    try{
        //Verifico se ele pe valido
        const validar = jwt.verify(token, JWT);
        next()
    }catch{
        res.status(401).json("Token não validado");
    }

}

module.exports = { autenticar }