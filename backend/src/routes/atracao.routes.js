import express from "express";
import { authenticator } from "../middlewares/auth.middleware.js";
import { getAttractions, createAttraction, deleteAtrraction } from "../controllers/atracao.controller.js";
const router = express.Router();

router.get("/", authenticator, getAttractions);
router.post("/", authenticator, createAttraction);
router.delete("/:id", authenticator, deleteAtrraction);

export default router;
