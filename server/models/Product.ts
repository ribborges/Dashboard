import { Document, model, Schema } from "mongoose";

export interface ProductInterface extends Document {
    name: string,
    price: number,
    description: string,
    category: string,
    rating: number,
    supply: number,
    _doc?: any,
}

export const ProductSchema: Schema<ProductInterface> = new Schema({
    name: String,
    price: Number,
    description: String,
    category: String,
    rating: Number,
    supply: Number,
}, { timestamps: true });

const Product = model<ProductInterface>("Product", ProductSchema);
export default Product;