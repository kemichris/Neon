import Counter from "../models/counter.model.js";

export const generateAccountNumber = async (session) => {
    const counter = await Counter.findOneAndUpdate(
        { name: "accountNumber" },
        { $inc: { value: 1 } },
        {
            new: true,
            upsert: true,
            session
        }
    );

    return String(counter.value);
};