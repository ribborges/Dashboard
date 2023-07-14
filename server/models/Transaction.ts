import { Document, model, Schema, Types } from "mongoose";

export interface TransactionInterface extends Document {
    userId: string,
    cost: string,
    products: Types.Array<Types.ObjectId>,
    _doc?: any,
}

export const TransactionSchema: Schema<TransactionInterface> = new Schema({
    userId: String,
    cost: String,
    products: {
        type: [Schema.Types.ObjectId],
        of: Number
    }
}, { timestamps: true });

const Transaction = model<TransactionInterface>("Transation", TransactionSchema);
export default Transaction;