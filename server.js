const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
require("./mongoose");
const db = require("./connection");
const collection = db.collection("bookstore");
const PORT = process.env.PORT;
const app = express();
app.use(express.json());



app.get("/", async (req, res) => {
  console.log(req.query);
  const cursor = collection.find();
  const results = await cursor.toArray();
  res.json(results);
});

//import book route
const bookRouter = require("./routes/bookstore");
app.use("/bookstore", bookRouter);



app.listen(PORT);
