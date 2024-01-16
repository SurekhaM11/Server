const {
  getStudentDAO,
  regStudentDAO,
  postStudentDAO,
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
module.exports = {
  regStudentService,
  getStudentService,
  loginStudentService,
};
//any service operations we can do here.
//for example, password encrypt and save, image convertion to base64
