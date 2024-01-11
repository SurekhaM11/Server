var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/query-param-test", function (req, res, next) {
  var { name, location } = req.query;
  res.send(`This is ${name} and this output from ${location}`);
});

router.get("/path-param-test/:name/:location", function (req, res, next) {
  var { name, location } = req.params;
  res.send(`This is ${name} and this output from ${location}`);
});

router.put("/headers-test", function (req, res, next) {
  var { name, location } = req.headers;
  res.send(`This is ${name} and this output from ${location}`);
});

router.post("/body-test", function (req, res, next) {
  var { name, location } = req.body;
  res.send(`This is ${name} and this output from ${location}`);
});
module.exports = router;
