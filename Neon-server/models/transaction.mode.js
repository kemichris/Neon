import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema(
    {
        sender: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },

        receiver: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },

        senderAccount: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Account',
            required: true
        },

        receiverAccount: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Account',
            required: true
        },

        amount: {
            type: Number,
            required: true,
            min: 1
        },

        currency: {
            type: String,
            enum: ['USD', 'EUR', 'GBP', 'NGN'],
            required: true
        },

        type: {
            type: String,
            enum: ['transfer', 'deposit', 'withdrawal'],
            required: true
        },

        direction: {
            type: String,
            enum: ['credit', 'debit'],
            required: true
        },

        reference: {
            type: String,
            required: true,
            unique: true
        },

        description: {
            type: String,
            default: ''
        },

        status: {
            type: String,
            enum: ['pending', 'completed', 'failed'],
            default: 'pending'
        }
    },
    {
        timestamps: true
    }
);

const Transaction = mongoose.model('Transaction', transactionSchema);

export default Transaction;