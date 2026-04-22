import User from "../models/Usuario.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const login = async (req, res) => {
  const { email, senha: password } = req.body;
  const user = await User.findOne({
    where: { email },
  });

  if (!user) {
    return res.status(404).json({ message: "Usuario não encontrado" });
  }

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(404).json({ message: "Senha incorreta" });
  }

  const loggedUser = { id: user.id, role: user.role };
  const secret = process.env.JWT_SECRET;
  const token = jwt.sign(loggedUser, secret, { expiresIn: "1h" });
  return res.json({ token });
};
