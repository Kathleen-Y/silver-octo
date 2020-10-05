const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const MongoClient = require('mongodb').MongoClient;
const PORT = process.env.PORT || 27017;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(require("./src/utils/api"));

const uri = "mongodb+srv://kjy_24:<Snow123Joy>@clusterkjy.lcvdc.mongodb.net/<re>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  client.close();
})

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
