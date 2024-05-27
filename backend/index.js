import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";

dotenv.config();

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Welcome to Athenaeum v1.0.0!");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB :<", err);
  });

app.use("/api/user", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
