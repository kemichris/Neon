import express from 'express';
import { register } from '../controllers/auth.controller.js';
import { registerSchema } from '../validators/auth.validator.js';
import { validate } from '../middlewares/validate.middleware.js';

const router = express.Router();

// Register a new user
router.post('/register', validate(registerSchema), register);

export default router;