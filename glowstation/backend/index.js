const express = require("express");
const { MongoClient } = require("mongodb");
const app = express();

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri, { useUnifiedTopology: true });

const connect = async () => {
  try {
    await client.connect();
    console.log("Connected to Local Database");
  } catch (e) {
    console.log("an error occured");
    console.error(e);
  } finally {
  }
};

connect();

app.get("/products", async (req, res) => {
  // use glowstation; db.products; find all
  const allProducts = await client
    .db("glowstation")
    .collection("products")
    .find({})
    .toArray();

  res.json({
    message: "Here are all your products!",
    products: allProducts,
  });
});

// get /products/Mists or Exfoliators etc

app.get("/products/:category", async (req, res) => {
  const matchingProduct = await client
    .db("glowstation")
    .collection("products")
    .findOne({ category: req.params.category });

  res.json({
    message: "Here is that category of products",
    data: matchingProduct,
  });
});

app.listen(4000, () => {
  console.log("server is running");
});
