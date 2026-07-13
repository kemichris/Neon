import { z } from 'zod';

export const transferSchema = z.object({
    recipientAccountNumber: z
        .string()
        .trim()
        .length(10, 'Account number must be 10 digits.'),

    amount: z
        .number()
        .int()
        .positive('Amount must be greater than zero.'),

    description: z
        .string()
        .trim()
        .max(200)
        .optional()
});