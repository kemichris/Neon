import mongoose from 'mongoose';
import Account from '../models/account.model.js';
import Transaction from '../models/transaction.model.js';
import ApiError from '../utils/apiError.utils.js';
import { generateTransactionReference } from '../utils/transaction.utils.js';

export const transferFunds = async (senderId, transferData) => {
    const {
        recipientAccountNumber,
        amount,
        description
    } = transferData;

    // Start MongoDB session
    const session = await mongoose.startSession();

    try {
        session.startTransaction();

        // Find sender's account
        const senderAccount = await Account.findOne({
            owner: senderId
        }).session(session);

        if (!senderAccount) {
            throw new ApiError(404, 'Sender account not found.');
        }

        // Ensure sender account is active
        if (senderAccount.status !== 'active') {
            throw new ApiError(400, 'Sender account is not active.');
        }

        // Prevent self-transfer
        if (senderAccount.accountNumber === recipientAccountNumber) {
            throw new ApiError(400, 'You cannot transfer to your own account.');
        }

        // Ensure sender has sufficient balance
        if (senderAccount.balance < amount) {
            throw new ApiError(400, 'Insufficient balance.');
        }

        // Find recipient's account
        const receiverAccount = await Account.findOne({
            accountNumber: recipientAccountNumber
        })
            .populate('owner')
            .session(session);

        if (!receiverAccount) {
            throw new ApiError(404, 'Recipient account not found.');
        }

        // Ensure recipient account is active
        if (receiverAccount.status !== 'active') {
            throw new ApiError(400, 'Recipient account is not active.');
        }

        // Ensure both accounts use the same currency
        if (senderAccount.currency !== receiverAccount.currency) {
            throw new ApiError(400, 'Currency mismatch.');
        }

        // Generate unique transaction reference
        const reference = generateTransactionReference();

        // Debit sender
        senderAccount.balance -= amount;

        // Credit receiver
        receiverAccount.balance += amount;

        // Sender's transaction record
        const senderTransaction = new Transaction({
            owner: senderId,
            ownerAccount: senderAccount._id,

            counterParty: receiverAccount.owner._id,
            counterPartyAccount: receiverAccount._id,

            amount,
            currency: senderAccount.currency,
            type: 'transfer',
            direction: 'debit',
            reference,
            description,
            status: 'completed'
        });

        // Receiver's transaction record
        const receiverTransaction = new Transaction({
            owner: receiverAccount.owner._id,
            ownerAccount: receiverAccount._id,

            counterParty: senderId,
            counterPartyAccount: senderAccount._id,

            amount,
            currency: receiverAccount.currency,
            type: 'transfer',
            direction: 'credit',
            reference,
            description,
            status: 'completed'
        });

        // Save both transaction records
        await senderTransaction.save({ session });
        await receiverTransaction.save({ session });

        // Save updated account balances
        await senderAccount.save({ session });
        await receiverAccount.save({ session });

        // Commit transaction
        await session.commitTransaction();

        // Return transfer details
        return {
            transactionId: senderTransaction._id,
            reference: senderTransaction.reference,
            amount: senderTransaction.amount,
            currency: senderTransaction.currency,
            description: senderTransaction.description,
            status: senderTransaction.status
        };

    } catch (error) {
        if (session.inTransaction()) {
            await session.abortTransaction();
        }
        throw error;
    } finally {
        await session.endSession();
    }
};