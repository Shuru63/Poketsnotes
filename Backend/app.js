const express = require("express");
const app = express();
const cors = require('cors');

const allroute=require("./Router/allRouter")
app.use(express.json());
app.use(cors());
app.use("/poketapi", allroute);

module.exports = app;