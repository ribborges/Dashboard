import { Document, model, Schema } from "mongoose";

export interface ProductStatInterface extends Document {
    productId: string,
    yearlySalesTotal: number,
    yearlyTotalSoldUnits: number,
    year: number,
    monthlyData: Array<{
        month: String,
        totalSales: Number,
        totalUnits: Number
    }>,
    dailyData: Array<{
        date: string,
        totalSales: number,
        totalUnits: number
    }>,
    _doc?: any,
}

export const ProductStatSchema: Schema<ProductStatInterface> = new Schema({
    productId: String,
    yearlySalesTotal: Number,
    yearlyTotalSoldUnits: Number,
    year: Number,
    monthlyData: [{
        month: String,
        totalSales: Number,
        totalUnits: Number
    }],
    dailyData: [{
        date: String,
        totalSales: Number,
        totalUnits: Number
    }]
}, { timestamps: true });

const ProductStat = model<ProductStatInterface>("ProductStat", ProductStatSchema);
export default ProductStat;