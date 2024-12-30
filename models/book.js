const mongoose = require('mongoose');

//Schema for Books with validation -->>title,author,publishedYear,genre,price

const BookSchema = mongoose.Schema({
    title: {
        type:String,
        required: true,
        
    },

    author:{
        type:String,
        required: true,
       
    },

    publishedDate:{
        type: Date,
       },

    genre:{
        type: String,
       },

    price:{
        type: Number,
        required: true, 
        min:1  // minimum price should be atleat this positive value 
        
       },
    },
    {
        versionKey: false      // this is version key which helps to remove __v in documents of the collection
    }

);

module.exports = mongoose.model('Book',BookSchema);



