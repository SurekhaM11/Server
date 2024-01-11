var getDBCon = require("../../common/getDBCon");
async function regStudentDAO(data) {
  console.log("regStudentDAO");
  var db = await getDBCon();
  var collection = db.collection("Student");
  const result = await collection.insertOne(data);
  console.log("dao given result back to service");
  return result;
}

async function getStudentDAO() {
  console.log("getStudentDAO");
  var db = await getDBCon();
  var collection = db.collection("students");
  const result = await collection.find().toArray();
  result.map((obj) => {
    delete obj.pwd;
    return obj;
  });
  return result;
}

module.exports = {
  regStudentDAO,
  getStudentDAO,
};