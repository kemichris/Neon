import Counter from "../models/Counter.js";

export const generateAccountNumber = async () => {
    const counter = await Counter.findOneAndUpdate(
        { name: "accountNumber" },
        { $inc: { value: 1 } },
        {
            new: true,
            upsert: true
        }
    );

    return counter.value.toString();
};