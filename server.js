const dotenv = require("dotenv");

//load environment variables from.env file 
dotenv.config();
const express = require("express");

//import mongoose from mongoose.js
require("./mongoose");

//import connection from connection.js
const db = require("./connection");

//import book collection from models/book.js
const collection = db.collection("bookstore");

//set up the express app and port
const PORT = process.env.PORT;
const app = express();

//set up middleware to parse JSON request bodies
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
