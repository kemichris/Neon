import * as transactionService from '../services/transaction.service.js';

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