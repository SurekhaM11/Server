var mongo = require("mongodb");
async function getDBCon() {
  var url = "mongodb+srv://mandavallisurekha:s1@s.t4xgrti.mongodb.net/";
  // MongoDB server- Database - collection - document
  var mongoClient = mongo.MongoClient;
  var server = await mongoClient.connect(url);
  var db = server.db("School");
  return db;
}

module.exports = getDBCon;
