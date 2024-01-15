var mongo = require("mongodb");
async function getDBCon() {
  var url = process.env.DB_CONN_URL;
  // MongoDB server- Database - collection - document
  var mongoClient = mongo.MongoClient;
  var server = await mongoClient.connect(url);
  var db = server.db("School");
  return db;
}

module.exports = getDBCon;
