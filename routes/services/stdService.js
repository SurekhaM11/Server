const { getStudentDAO, regStudentDAO } = require("../dao/stdDAO");
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

module.exports = {
  regStudentService,
  getStudentService,
};
//any service operations we can do here.
//for example, password encrypt and save, image convertion to base64
