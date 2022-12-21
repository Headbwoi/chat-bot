import express from "express";
import { connectDB } from "./config/db.js";
import "dotenv/config.js";
connectDB();
const port = process.env.PORT || 5000;
const app = express();
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
