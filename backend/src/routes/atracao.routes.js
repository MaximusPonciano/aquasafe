import express from 'express';
import { autenticar } from '../middlewares/auth.middleware.js';
import {selecionarAtracao, criarAtracao} from '../controllers/atracao.controller.js';
const router = express.Router();

router.get('/', autenticar, selecionarAtracao);
router.post('/', autenticar, criarAtracao);

export default router;