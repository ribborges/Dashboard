import { Document, model, Schema } from "mongoose";

export interface UserInterface extends Document {
    name: string,
    email: string,
    password: string,
    city: string,
    state: string,
    country: string,
    occupation: string,
    phoneNumber: string,
    transactions: [],
    role: string,
    _doc?: any,
}

export const UserSchema: Schema<UserInterface> = new Schema({
    name: {
        type: String,
        required: true,
        min: 2,
        max: 100
    },
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 5
    },
    city: String,
    state: String,
    country: String,
    occupation: String,
    phoneNumber: String,
    transactions: Array,
    role: {
        type: String,
        enum: ["user", "admin", "superadmin"],
        default: "admin"
    }
}, { timestamps: true });

const User = model<UserInterface>("User", UserSchema);
export default User;