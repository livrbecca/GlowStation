const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const { MONGO_URI } = require("./config");
const app = express();
const cors = require("cors");

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

app.use(cors());

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

app.get("/products/results", async (req, res) => {
  let categories, skinType;
  if (req.query.category) {
    categories = req.query.category.split(",");
    console.log(categories);
  }
  skinType = req.query.skinType;
  console.log(skinType);

  const resultsQ1 = await client
    .db("glow")
    .collection("products")
    .find({ $and: [{ category: { $in: categories } }, { skinType: skinType }] })
    .toArray();

  res.json({ message: "routine builder results", data: resultsQ1 });
  // should be something like
  // localhost:5000/products/results?category=Moisturisers&skinType=Redness
});

app.get("/products/results", async (req, res) => {
  let categories;
  let skinConcern;
  if (req.query.category) {
    categories = req.query.category.split("", "");
    console.log(categories);
  }
  skinConcern = req.query.skinConcern222;

  const resultsQ1 = await client
    .db("glow")
    .collection("products")
    .find({
      $and: [
        { category: { $in: categories } },
        { skinConcern222: skinConcern },
      ],
    })
    .toArray();

  res.json({ message: "routine builder results", data: resultsQ1 });
  // should be something like
  // localhost:5000/products/results?category=Moisturisers&skinType=Redness
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

app.get("/products/skinType/:skinType", async (req, res) => {
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

app.get("/products/skinConcern/:skinConcern222", async (req, res) => {
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

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});

// node /backend server.js
