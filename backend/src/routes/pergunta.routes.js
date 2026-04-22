import express from 'express';
import { autenticar} from '../middlewares/auth.middleware.js';
import { criarPergunta, listarPerguntas } from '../controllers/pergunta.controller.js';

const router = express.Router();

router.post('/', autenticar, criarPergunta);
router.get('/:id', autenticar, listarPerguntas);

export default router;
