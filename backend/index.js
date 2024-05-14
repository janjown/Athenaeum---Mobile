const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// idk baka magamit mo. Di ko pa siya na-utilize ng ayos
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const app = express();
const port = 8000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const jwt = require("jsonwebtoken");
require("dotenv").config();

const dbUser = process.env.MONGODB_USERNAME;
const dbPassword = process.env.MONGODB_PASSWORD;
const dbName = process.env.MONGODB_DATABASE;
const dbCluster = process.env.MONGODB_CLUSTER;
const dbUri = `mongodb://${dbUser}:${dbPassword}@${dbCluster}/?ssl=true&replicaSet=atlas-ul6e3g-shard-0&authSource=admin&retryWrites=true&w=majority&appName=${dbName}`;

mongoose
  .connect(
    "mongodb://athenDB:ecclms@ac-qogisw9-shard-00-00.ju3eiz4.mongodb.net:27017,ac-qogisw9-shard-00-01.ju3eiz4.mongodb.net:27017,ac-qogisw9-shard-00-02.ju3eiz4.mongodb.net:27017/?ssl=true&replicaSet=atlas-ul6e3g-shard-0&authSource=admin&retryWrites=true&w=majority&appName=athenaeum"
  )
  .then(() => {
    console.log("Welcome to Athenaeum v1.0.0!");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB :<", err);
  });

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
