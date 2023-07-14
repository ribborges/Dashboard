import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

/* Routes */
import clientRoutes from "./routes/client";
import generalRoutes from "./routes/general";
import managementRoutes from "./routes/management";
import salesRoutes from "./routes/sales";

/* Data model imports */

import User from "./models/User";
import Product from "./models/Product";
import ProductStat from "./models/ProductStat";
import Transaction from "./models/Transaction";
import { dataUser, dataProduct, dataProductStat, dataTransaction } from "./data/index";

/* Config */
dotenv.config();
const app = express();
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

/* Routes */
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

/* Mongo */
const PORT = process.env.PORT || 9000;
mongoose.connect(`${process.env.MONGO_URL}`)
    .then(() => {
        app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

        //User.insertMany(dataUser);
        //Product.insertMany(dataProduct);
        //Transaction.insertMany(dataTransaction);
        //ProductStat.insertMany(dataProductStat);
    })
    .catch((error) => console.log(`${error} did not connect`));