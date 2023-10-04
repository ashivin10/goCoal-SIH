require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const coalFetch = require("./Routes/coalFetch");
const coalMine = require("./Routes/coalMine");

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/coalpush", coalMine); //Creating users
app.use("/api/coalfetch", coalFetch); //Login for users

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
