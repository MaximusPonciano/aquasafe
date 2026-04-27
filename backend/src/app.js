import express from 'express';
import authRoutes from './routes/auth.routes.js';
import checklistRoutes from './routes/checklist.routes.js';
import atracaoRoutes from './routes/atracao.routes.js';
import perguntaRoutes from './routes/pergunta.routes.js';
import Checklist from './models/Checklist.js';
import ItemChecklist from './models/ItemChecklist.js';
import cors from 'cors';

Checklist.hasMany(ItemChecklist, { foreignKey: 'checklistId' });
ItemChecklist.belongsTo(Checklist, { foreignKey: 'checklistId' });


const app = express();
const port = 3000;

app.use(cors({
    origin: 'http://localhost:5173'
}));

app.use(express.json());
app.use('/auth', authRoutes);
app.use('/checklists', checklistRoutes);
app.use('/atracao', atracaoRoutes);
app.use('/pergunta', perguntaRoutes);

app.listen(port, () =>{
    console.log("Servidor subiu");
});