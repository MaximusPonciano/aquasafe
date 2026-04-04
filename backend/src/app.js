const bancoDeDados = require('./database.js');
const express = require('express');
const routes = require('./routes/auth.routes.js')

const app = express();
const port = 3000
app.use(express.json())

app.get('/', (req, res) => {

});

app.use('/auth', routes);

app.listen(port, () =>{
    console.log("Servidor subiu")

});




