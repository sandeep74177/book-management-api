
const MONGO_URI = process.env.MONGO_URI;
//make the connection with mongoose server
const mongoose = require('mongoose');

//connect to the MongoDB database
mongoose.connect(MONGO_URI)
.then(() => console.log("Connect to the DB by the mongoose"))
.catch((err) => console.error(err));
