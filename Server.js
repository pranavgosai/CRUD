require("./conn");
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const routes = require("./routes/TasRoute")
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use("/api",routes);

app.listen(PORT, () => console.log(`Listening at ${PORT}`));
