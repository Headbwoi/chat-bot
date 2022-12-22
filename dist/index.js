import express from "express";
import { connectDB } from "./config/db.js";
import "dotenv/config.js";
connectDB();
import botRouter from "./routes/botRoute.js";
import { errorHandler } from "./middleware/errorMiddleware.js";
// seedDB()
const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", botRouter);
app.use(errorHandler);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
