import { authenticator } from "../middlewares/auth.middleware.js";
import { createChecklist, getChecklist, deleteChecklist } from "../controllers/checklist.controller.js";
import express from "express";
const router = express.Router();

router.post("/", authenticator, createChecklist);
router.get("/", authenticator, getChecklist);
router.delete("/:id", authenticator, deleteChecklist);

export default router;
