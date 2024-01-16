const { ObjectId } = require("mongodb");
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
  var collection = db.collection("Student");
  const result = await collection.find().toArray();
  result.map((obj) => {
    delete obj.pwd;
    return obj;
  });
  return result;
}
async function postStudentDAO(data) {
  console.log("postStudentDAO");
  const { uid, pwd } = data;
  var db = await getDBCon();
  var collection = db.collection("Student");
  const result = await collection.find({ uid, pwd }).toArray();
  console.log("dao given back to service from poststudent dao");
  return result;
}
async function putStudentDAO(id, data) {
  console.log("putStudentDAO");
  var db = await getDBCon();
  var collection = db.collection("Student");
  var result = await collection.updateOne(
    { _id: new ObjectId(id) },
    { $set: data }
  );
  console.log("result given back from dao to service from put call");
  return result;
}
async function deleteStudentDAO(id) {
  // console.log("deleteStudentDAO");
  // var db = await getDBCon();
  // var collection = db.collection("Student");
  // var result = await collection.deleteOne({ _id: new ObjectId(id) });
  // console.log("deleted successfully from db ");
  // res.setHeader("Content-Type", "application/json");
  // res.json(result);
  // return result;
  var db = await getDBCon();
  var collection = db.collection("Student");
  var result = await collection.deleteOne({ _id: new ObjectId(id) });
  return result;
}
module.exports = {
  regStudentDAO,
  getStudentDAO,
  postStudentDAO,
  putStudentDAO,
  deleteStudentDAO,
};
