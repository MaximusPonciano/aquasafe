import { authenticator } from '../middlewares/auth.middleware.js';
import express from 'express';
const router = express.Router();

router.get('/', authenticator, (req, res) => {
});

export default router;