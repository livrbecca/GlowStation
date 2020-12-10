const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const { MONGO_URI } = require("./config");
const app = express();

const uri = MONGO_URI;
const client = new MongoClient(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

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

// ALL products

app.get("/products", async (req, res) => {
  // use glowstation; db.products; find all
  const allProducts = await client
    .db("glow")
    .collection("products")
    .find({})
    .toArray();

  res.json({
    message: "Here are all your products!",
    products: allProducts,
  });
});

//Categorys work, but only lists one product
// error with findMany & find, only 'findOne' works
//Unsure how to search 'ones with spaces and & sign
// SOLVED: Toners%20&%20Essence works
//SOLVED BY ADDING .toArray()

app.get("/products/category/:category", async (req, res) => {
  const matchingCategory = await client
    .db("glow")
    .collection("products")
    .find({ category: req.params.category })
    .toArray();

  res.json({
    message: "Here is that category of products",
    data: matchingCategory,
  });
});

// By Skin type

app.get("/products/skintype/:skinType", async (req, res) => {
  const matchingSkinType = await client
    .db("glow")
    .collection("products")
    .find({ skinType: req.params.skinType })
    .toArray();

  res.json({
    message: "Here products suitable for this skin type",
    data: matchingSkinType,
  });
});

// By Concern

app.get("/products/concern/:skinConcern222", async (req, res) => {
  const matchingConcern = await client
    .db("glow")
    .collection("products")
    .find({ skinConcern222: req.params.skinConcern222 })
    .toArray();

  res.json({
    message: "Here are products that address this concern",
    data: matchingConcern,
  });
});

// Advert links: snail mucin, by id
//5fd230666999d824384ef756

app.get("/products/:id", async (req, res) => {
  const matchingId = await client
    .db("glow")
    .collection("products")
    .findOne({ _id: new ObjectId(req.params.id) });

  res.json({
    message: "Here is the advert information",
    data: matchingId,
  });
});

//Advert links: cleansers - /products/category/category/cleansers

//Advert links: serums - /products/category/category/serums

app.listen(4000, () => {
  console.log("server is running");
});
