const express = require("express");
const app = express();
const cors = require("cors");
//setup middleware
app.use(express.json());
app.use(cors());

app.get("/", async (req, res, next) => {
  return res.json({ message: "funky prices api" });
});

module.exports = app;
