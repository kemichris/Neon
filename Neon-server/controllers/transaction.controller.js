import * as transactionService from '../services/transaction.service.js';

// Transfer funds
export const transferFunds = async (req, res, next) => {
    try {
        const transfer = await transactionService.transferFunds(
            req.user._id,
            req.body
        );

        return res.status(200).json({
            success: true,
            message: 'Transfer successful.',
            data: transfer
        });

    } catch (error) {
        next(error);
    }
};

// Deposit funds
export const depositFunds = async (req, res, next) => {
    try {
        console.log(req.file);
        const result = await transactionService.depositFunds(
            req.user._id,
            req.body,
            req.file
        );

        res.status(201).json({
            success: true,
            message: 'Deposit submitted successfully.',
            data: result
        });

    } catch (error) {
        next(error);
    }
};