import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import connectDB from "./config/database.config";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import errorHandler from "./middleware/errorHandler";
import customerRoutes from "./routes/customer";

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// app.use("/", indexRouter);
app.use("/api/customers", customerRoutes);
app.use(errorHandler);

export default app;
