const express = require("express");
const data = require("./products.json");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/api/products", (req, res) => {
  res.send(data);
});

app.get("/", (req, res) => {
  res.send("Server is ready");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});

// node /backend server.js
