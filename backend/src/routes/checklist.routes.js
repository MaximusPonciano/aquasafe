const { autenticar } = require('../middlewares/auth.middleware');
const express = require('express');
const router = express.Router();

router.get('/', autenticar, (req, res) => {
    res.json("Rota protegida!")
});

module.exports = router