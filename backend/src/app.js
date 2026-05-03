import express from "express";
import cors from "cors";

import { config } from "./config/constants.js";

import authRoutes from "./routes/auth.routes.js";
import checklistRoutes from "./routes/checklist.routes.js";
import atracaoRoutes from "./routes/atracao.routes.js";
import perguntaRoutes from "./routes/pergunta.routes.js";
import Checklist from "./models/Checklist.js";
import ItemChecklist from "./models/ItemChecklist.js";

Checklist.hasMany(ItemChecklist, { foreignKey: "checklistId" });
ItemChecklist.belongsTo(Checklist, { foreignKey: "checklistId" });

const app = express();
const port = 3000;

app.use(
  cors({ origin: config.server.corsOrigin, }),
);

app.use(express.json());
app.use(config.api.prefixAuth, authRoutes);
app.use(config.api.prefixChecklist, checklistRoutes);
app.use(config.api.prefixAtracao, atracaoRoutes);
app.use(config.api.prefixPergunta, perguntaRoutes);

app.listen(port, () => {
  console.log("Servidor subiu");
});
