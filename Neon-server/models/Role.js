import mongoose from "mongoose"

const roleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        enum: ['user', 'admin', 'manager', 'superadmin']
    },
    description: {
        type: String
    },
    permissions: [
        {
            type: String
        }
    ]
},
    {
        timestamps: true
    }
);

const roleModel = mongoose.model('Role', roleSchema);

export default roleModel;