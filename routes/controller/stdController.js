var express = require("express");
var router = express.Router();
var {
  regStudentService,
  getStudentService,
  loginStudentService,
} = require("../services/stdService");
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
router.get("/get-std", async function (req, res) {
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
module.exports = router;
