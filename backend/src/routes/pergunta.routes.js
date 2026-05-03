import express from "express";
import { authenticator } from "../middlewares/auth.middleware.js";
import { createQuestion, listQuestions, deleteQuestions } from "../controllers/pergunta.controller.js";

const router = express.Router();

router.post("/", authenticator, createQuestion);
router.get("/:id", authenticator, listQuestions);
router.delete("/:id", authenticator, deleteQuestions);

export default router;
