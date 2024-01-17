var express = require("express");
var router = express.Router();
var {
  regStudentService,
  getStudentService,
  loginStudentService,
  putStudentService,
  deleteStudentService,
  //getStudentServiceById,
  getStdByIdService,
} = require("../services/stdService");

var validateToken = require("../../common/validateToken");
// http://localhost:2020/std/reg-std,post(this is the url)

router.post("/reg-std", async function (req, res) {
  try {
    console.log("reg-std controller");
    //take the data from req
    //connect with DB
    //perform required operation
    //prepare res
    //send res back to client
    const { data } = req.body;

    const result = await regStudentService(data);
    console.log("controller received result and give it back to client");
    res.send(result);
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
});

// http://localhost:2020/std/get-std,get(this is the url)
router.get("/get-std", validateToken, async function (req, res, next) {
  //take the data from req
  //connect with DB
  //perform required operation
  //prepare res
  //send res back to client
  console.log("controller");
  const result = await getStudentService();
  res.send(result);
  console.log("get-std final response");
});
// http://localhost:2020/std/login,post
router.post("/login", async function (req, res) {
  try {
    console.log("login controller");
    const { data } = req.body;
    const result = await loginStudentService(data);
    console.log("result given back to controller from service ");
    res.send(result);
  } catch (err) {
    console.error(err);
    res.send(err.message);
  }
});
//http://localhost:2020/std/update, put req
router.put("/update", validateToken, async function (req, res) {
  try {
    console.log("update controller");
    const { data } = req.body;
    const { id } = req.query;
    var result = await putStudentService(id, data);
    res.send(result);
  } catch (err) {
    console.error("errror from Put", err);
  }
});
//http://localhost:2020/std/delete-req, delete req
router.delete("/delete-std/:id", validateToken, async function (req, res) {
  try {
    console.log("delete controller");
    const { id } = req.params;
    var result = await deleteStudentService(id);
    console.log("deleted successfully");
    res.send(result);
  } catch (err) {
    console.error("error from delete req", err);
  }
});

// router.get("get-std-by-id", async function (req, res) {
//   try {
//     console.log("get-std-by-id controller");
//     var { id } = req.query;
//     var result = await getStudentServiceById(id);
//     console.log("result returned from service ");
//     res.send(result);
//   } catch (err) {
//     console.error("error from get-std-by-id", err);
//   }
// });
router.get("/get-std-by-id", validateToken, async function (req, res, next) {
  try {
    console.log("get-std-by-id controller");
    var { id } = req.query;
    const result = await getStdByIdService(id);
    console.log("result returned from service ");
    res.send(result);
  } catch (ex) {
    console.error("get-std-by-id", ex);
    res.send(ex.message);
  }
});
module.exports = router;
