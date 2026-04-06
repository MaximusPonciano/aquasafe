const express = require('express');
const {autenticar} = require('../middlewares/auth.middleware')
const {criarPergunta, listarPerguntas } = require('../controllers/pergunta.controller');

const router = express.Router();

router.post('/', autenticar, criarPergunta);
router.get('/:id', autenticar, listarPerguntas);

module.exports = router
