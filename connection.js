const mongodb = require("mongodb");
const MONGO_URI = process.env.MONGO_URI;

//connection with mongodb server

const client = new mongodb.MongoClient(MONGO_URI);
client
  .connect()
  .then(() => console.log("Connect to the DB"))
  .catch((err) => console.error(err));

  //selecting the database "test database"
const db = client.db("test");


//exporting the database for use in other files
module.exports = db;
