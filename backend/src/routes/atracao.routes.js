import express from "express";
import { authenticator } from "../middlewares/auth.middleware.js";
import { getAttractions, createAttraction,} from "../controllers/atracao.controller.js";
const router = express.Router();

router.get("/", authenticator, getAttractions);
router.post("/", authenticator, createAttraction);

export default router;
