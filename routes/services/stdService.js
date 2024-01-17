const {
  getStudentDAO,
  regStudentDAO,
  postStudentDAO,
  putStudentDAO,
  deleteStudentDAO,
  // getStudentDAOById,
  getStdByIdDAO,
} = require("../dao/stdDAO");
var jsonwebtoken = require("jsonwebtoken");
async function regStudentService(data) {
  console.log("regStudent service ");
  var result = await regStudentDAO(data);
  console.log("service received result and send it to controller");
  return result;
}
async function getStudentService() {
  console.log("getStudentService");
  const result = await getStudentDAO();
  return result;
}

async function loginStudentService(data) {
  console.log("loginStudentService");
  var result = await postStudentDAO(data);
  if (result.length) {
    var token = jsonwebtoken.sign(data, "app-token");
    console.log("token", token);
    result[0].token = token;
    delete result[0].pwd;
  }
  console.log("result received from dao and send to controller");
  return result;
}
async function putStudentService(id, data) {
  console.log("putStudentService");
  var result = await putStudentDAO(id, data);
  console.log("result given back to controller from service ");
  return result;
}
async function deleteStudentService(id) {
  console.log("deleteStudentService");
  var result = await deleteStudentDAO(id);
  console.log("result given back to controller from service");
  return result;
}
// async function getStudentServiceById(id) {
//   console.log("getStudentServiceById");
//   var result = await getStudentDAOById(id);
//   console.log("received result from dao and ");
//   return result;
// }
async function getStdByIdService(id) {
  console.log("getStudentServiceById");
  var result = await getStdByIdDAO(id);
  console.log("received result from dao and ");
  return result;
}

module.exports = {
  regStudentService,
  getStudentService,
  loginStudentService,
  putStudentService,
  deleteStudentService,
  // getStudentServiceById,
  getStdByIdService,
};
//any service operations we can do here.
//for example, password encrypt and save, image convertion to base64
