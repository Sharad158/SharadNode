const {MongoClient} = require('mongodb');

const url = "mongodb://localhost:27017";
const dbName = "school";

const client = new MongoClient(url);

async function dbConnect() {
    let data = await client.connect();
    let db = data.db(dbName);
    return db.collection('students');
}

module.exports = dbConnect;