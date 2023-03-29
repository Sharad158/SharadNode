const { MongoClient } = require("mongodb");
//Both Syntax Are Same
// const  MongoClient  = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
// Local MongoDb Path

const client = new MongoClient(url);
// MongoDb Package Known Which Url data pass
const dbName = "New_Db";

async function getdata() {
  let result = await client.connect();
  // Client Return Promise Means Time Consuming After Result Ready It will execute so we need put await & when we use await then function should be async
  //Mongo DB Connect
  let db = result.db(dbName);
  let collection = db.collection("collection");
  let response = await collection.find({}).toArray();
  console.log(response);
}

getdata();
