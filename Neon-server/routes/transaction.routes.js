import express from 'express';
import {protect, authorize} from '../middlewares/auth.middleware.js';
import { validate } from '../middlewares/validate.middleware.js';
import { transferSchema } from '../validators/transaction.validator.js';
import { transferFunds } from '../controllers/transaction.controller.js';

const router = express.Router();

// Transfer funds route
router.post('/transfer', protect, authorize('user'), validate(transferSchema), transferFunds);

export default router;

