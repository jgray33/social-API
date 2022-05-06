const express = require("express");
const mongodb = require("mongodb").MongoClient;

const app = express();
const port = 3001;

const connectionStringURI = "mongodb://localhost:27017/socialDB";

let db;

mongodb.connect(
  connectionStringURI,
  { useNewUrlParser: true, userUnifiedTopology: true },
  (err, client) => {
    db = client.db();
       app.listen(port, () => {
      console.log(`App listening at http://localhost:${port}`);
    });
  }
);

app.use(express.json());
