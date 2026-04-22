import Usuario from '../models/Usuario.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

//Logica para confirmar o login
export const login = async (req, res) => {
    //Aqui eu pego as informaçoes que foram inseridas pelo usuario
    const { email, senha } = req.body
    //Aqui eu pego busco o objeto usuario do banco de dados
    const usuario = await Usuario.findOne({
        where: {email: email}});
//Valido se o usuario existe
if (!usuario) {
    // usuário não existe
    return res.status(404).json({ mensagem: 'Usuário não encontrado' })
};
//Variavel com a senha do banco de dados e a do usuario
const senhacorreta = await bcrypt.compare(senha, usuario.senha);
if(!senhacorreta){
    return res.status(404).json({ mensagem: 'Senha errada' })
};

// 1. Payload: Dados que você quer guardar no token (não coloque senhas aqui!)
const usuariologado = { id: usuario.id, perfil: usuario.perfil };

// 2. Chave Secreta: Uma string secreta para assinar o token (guarde no .env)
const JWT = process.env.JWT_SECRET;
const secret = JWT
const token = jwt.sign(usuariologado, secret, { expiresIn: '1h' });
return res.json({ token })

}

