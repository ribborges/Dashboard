import express from "express";
import { getProducts, getCustomers, getTransactions } from "../controlles/client";

const router = express.Router();

router.get("/products", getProducts);
router.get("/custumers", getCustomers);
router.get("/transactions", getTransactions);

export default router;