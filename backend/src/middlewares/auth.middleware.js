import jwt from 'jsonwebtoken';
import 'dotenv/config';

const jwtSecret = process.env.JWT_SECRET;

export const authenticator = (req, res, next) => {
    //Pego o header da requiçao
    const authHeader = req.headers.authorization

    //Valido se ele existe
    if( !authHeader ){
        return res.status(401).json("Usuario não autenticado");
    }
    //Pego o token de acesso
     const token = authHeader.split(' ')[1]
    try{
        //Verifico se ele pe valido
        jwt.verify(token, jwtSecret);
        next()
    }catch{
        res.status(401).json("Token não validado");
    }

};