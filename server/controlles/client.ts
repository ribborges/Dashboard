import Product from "../models/Product";
import ProductStat from "../models/ProductStat";
import Transaction from "../models/Transaction";
import User from "../models/User";
import { Request, Response } from "express";

export const getProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        const products = await Product.find();
        const productsWithStats = await Promise.all(
            products.map(async (product) => {
                const stat = await ProductStat.find({
                    productId: product._id
                });
                return {
                    ...product._doc,
                    stat,
                }
            })
        );

        res.status(200).json(productsWithStats);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};

export const getCustomers = async (req: Request, res: Response): Promise<void> => {
    try {
        const custumers = await User.find({ role: "user" }).select("-password");
        res.status(200).json(custumers);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};

export const getTransactions = async (req: Request, res: Response): Promise<void> => {
    try {
        const { page = 1, pageSize = 20, sort = null, search = "" } = req.body;

        const genSort = () => {
            const sortParsed = JSON.parse(sort);
            const sortFormatted = {
                [sortParsed]: sortParsed.sort === "asc" ? 1 : -1
            };

            return sortFormatted;
        };

        const sortFormatted: { [key: string]: any } = Boolean(sort) ? genSort() : {};
        const transactions = await Transaction.find({
            $or: [
                { cost: { $regex: new RegExp(search, "i") } },
                { userId: { $regex: new RegExp(search, "i") } }
            ]
        }).sort(sortFormatted).skip(page * pageSize).limit(pageSize);

        const total = await Transaction.countDocuments({
            name: { $regex: search, $options: "i" }
        });

        res.status(200).json({ transactions, total });
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};