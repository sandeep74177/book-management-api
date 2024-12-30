
const express = require("express");
const fs = require("fs");
const router = express.Router();
const Book=require("../models/Book");  //import book models



// home route
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: "Unable to fetch books from the database." });
  }
});


// find all the books with title
router.get("/:title",  async (req, res) => {
  try {
   
    const book = await Book.findOne(req.params.title);
    if (!book) {
      res.status(404).json({ message: "Book not found." });
      return;
    }
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: "Unable to fetch the book from the database." });
  }
});

// give the list of books with specified genre
router.get("/genre/:genre",  async (req, res) => {
  try {
   
    const book = await Book.find({genre:req.params.genre});
    if (!book) {
      res.status(404).json({ message: "Book not found." });
      return;
    }
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: "Unable to fetch the book from the database." });
  }
});


// Create a book with post method
router.post("/",  async (req, res) => {
  try {
     const newbook=new Book(req.body,{ $unset: { __v: "" } }) // unset the versionkey
     const book = await newbook.save();
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: err.message});
  }
});


// Update the book by title
router.patch("/:title", async (req, res) => {
  try {
    const book=await Book.findOne({title:req.params.title});
    Object.assign(book,req.body);
    const updatedBook= await book.save();
    res.json(updatedBook);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



// Delete the book by title
router.delete("/:title", async (req, res) => {
  try {
    const book = await Book.findOneAndDelete({title:req.params.title});
    if (!book) {
      res.status(404).json({ message: "book not found." });
      return;
    }
    res.json({ message: "book successfully deleted.", book });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Exports the route
module.exports = router;
