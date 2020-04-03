const Router = require("express").Router();
const jwt = require("jsonwebtoken");
Router.post("/login", function(req, res) {
  let token = jwt.sign(
    { name: req.body.name, password: req.body.password },
    "my_token",
    { expiresIn: "5000" }
  );
  res.send({
    code: "200",
    data: token,
    msg: "登录成功"
  });
});
Router.post("/registered", function(req, res) {
  res.send({
    code: "200",
    data: "1",
    msg: "成功"
  });
});
module.exports = Router;
