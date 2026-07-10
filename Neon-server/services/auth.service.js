import mongoose from 'mongoose';
import User from '../models/user.model.js';
import Role from '../models/role.model.js';
import Account from '../models/account.model.js';

import apiError from '../utils/apiError.utils.js';
import { hashPassword, comparePassword } from '../utils/password.utils.js';
import { generateAccountNumber } from '../utils/account.utils.js';

export const register = async (userData) => {

    const {
        firstName,
        lastName,
        email,
        phoneNumber,
        dateOfBirth,
        password
    } = userData;

    const existingEmail = await User.findOne({ email });

    if (existingEmail) {
        throw new ApiError(409, 'Email already exists.');
    }

    const existingPhone = await User.findOne({ phoneNumber });

    if (existingPhone) {
        throw new ApiError(409, 'Phone number already exists.');
    }

    const userRole = await Role.findOne({ name: 'user' });

    if (!userRole) {
        throw new ApiError(500, 'Default user role not found.');
    }

    const hashedPassword = await hashPassword(password);
    const session = mongoose.startSession();

    try {
        session.startTransaction();

        // Business logic goes here
        if (em)

            await session.commitTransaction();

        return {};

    } catch (error) {
        await session.abortTransaction();

        throw error;

    } finally {
        session.endSession();
    }

};