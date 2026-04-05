const bancoDeDados = require('./database.js');
const express = require('express');
const authRoutes = require('./routes/auth.routes.js')
const checklistRoutes = require('./routes/checklist.routes.js')
const atracaoRoutes = require('./routes/atracao.routes.js')

const app = express();
const port = 3000

app.use(express.json())
app.use('/auth', authRoutes);
app.use('/checklists', checklistRoutes);
app.use('/atracao', atracaoRoutes);

app.listen(port, () =>{
    console.log("Servidor subiu")
});