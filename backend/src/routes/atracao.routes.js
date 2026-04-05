const express = require('express');
const { autenticar } = require('../middlewares/auth.middleware');
const {selecionarAtracao, criarAtracao} = require('../controllers/atracao.controller');
const router = express.Router();

router.get('/', autenticar, selecionarAtracao);
router.post('/', autenticar, criarAtracao);

module.exports = router