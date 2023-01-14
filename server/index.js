import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import userRouter from "./routes/user.js";
const app = express();
app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/users", userRouter);
const NONGODB_URL =
  "mongodb+srv://codewithakram:codewithakram@cluster0.v9h4oix.mongodb.net/?retryWrites=true&w=majority";

const port = 5000;
mongoose
  .connect(NONGODB_URL)
  .then(() => {
    app.listen(port, () => console.log(`server is running on ${port}`));
  })
  .catch((err) => console.log(`${err} did not connect`));
