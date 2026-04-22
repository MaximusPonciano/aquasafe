import express from "express";
import { authenticator } from "../middlewares/auth.middleware.js";
import { createQuestion, listQuestions,
} from "../controllers/pergunta.controller.js";

const router = express.Router();

router.post("/", authenticator, createQuestion);
router.get("/:id", authenticator, listQuestions);

export default router;
