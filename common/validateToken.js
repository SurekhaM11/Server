var jwttoken = require("jsonwebtoken");
function validateToken(req, res, next) {
  var token = req.headers.authorization;
  if (token) {
    jwttoken.verify(token, "app-token", function (err) {
      if (err) {
        res.send("wrong token");
      } else {
        next();
      }
    });
  } else {
    res.send("token missing");
  }
}
module.exports = validateToken;
