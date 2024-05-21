const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// idk baka magamit mo. Di ko pa siya na-utilize ng ayos
const nodemailer = require("nodemailer");

const app = express();
const port = 3000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const jwt = require("jsonwebtoken");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => {
    console.log("Welcome to Athenaeum v1.0.0!");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB :<", err);
  });

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

app.get("/test", (req, res) => {
  res.json({ message: "API is working!" });
});
