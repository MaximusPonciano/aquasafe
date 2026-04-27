import jwt from "jsonwebtoken";
import { messages } from "../config/constants.js";
import "dotenv/config";

const jwtSecret = process.env.JWT_SECRET;

export const authenticator = (req, res, next) => {
  //Pego o header da requiçao
  const authHeader = req.headers.authorization;

  //Valido se ele existe
  if (!authHeader) {
    return res.status(401).json({ message: messages.auth.noToken });
  }
  //Pego o token de acesso
  const token = authHeader.split(" ")[1];
  try {
    //Verifico se ele pe valido
    const validate = jwt.verify(token, jwtSecret);
    req.usuario = validate;
    next();
  } catch {
    res.status(401).json({ message: messages.auth.invalidToken });
  }
};
