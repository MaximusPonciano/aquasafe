import { autenticar } from '../middlewares/auth.middleware.js';
import express from 'express';
const router = express.Router();

router.get('/', autenticar, (req, res) => {
});

export default router;