import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser"
import { connect } from "mongoose";
import Routes from "./routes/route.js";
const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))
app.use("/", Routes);

connect(process.env.Mongo_URL)
  .then(() => {
    console.info("Connected to MongoDB");
  })
  .catch(() => {
    console.info("Failed to connect to MongoDB");
  });
const PORT = 8000;
app.listen(8000, () => {
  console.log(`Server is running on port ${PORT}`);
});
