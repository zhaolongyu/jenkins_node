const Router = require("express").Router();
const jwt = require("jsonwebtoken");

Router.post("/login", function(req, res) {
  global.MongoClient.connect(global.url, { useNewUrlParser: true }, function(
    err,
    db
  ) {
    if (err) throw err;
    var dbo = db.db("runoob");
    var whereStr = { name: req.body.name, password: req.body.password };
    dbo
      .collection("user")
      .find(JSON.parse(JSON.stringify(whereStr)))
      .toArray(function(err, result) {
        if (err) throw err;
        if (result.length === 0) {
          res.send({
            code: "400",
            data: "d",
            msg: "登录失败"
          });
        } else {
          let token = jwt.sign(
            { name: req.body.name, password: req.body.password },
            "my_token",
            { expiresIn: "3H" }
          );
          if (req.body.name === "admin" && req.body.password === "admin") {
            res.send({
              code: "200",
              data: token,
              list: "admin",
              msg: "登录成功"
            });
          } else {
            res.send({
              code: "200",
              data: token,
              msg: "登录成功"
            });
          }
        }
        db.close();
      });
  });
});
Router.post("/regis", function(req, res) {
  global.MongoClient.connect(global.url, { useNewUrlParser: true }, function(
    err,
    db
  ) {
    if (err) throw err;
    var dbo = db.db("runoob");
    var myobj = { name: req.body.name, password: req.body.password };
    myobj = JSON.parse(JSON.stringify(myobj));
    dbo
      .collection("user")
      .find(myobj)
      .toArray(function(err, result) {
        if (err) throw err;
        if (result.length === 0) {
          dbo.collection("user").insertOne(myobj, function(err) {
            if (err) throw err;
            res.send({
              code: "200",
              data: "t",
              msg: "成功"
            });
            db.close();
          });
        } else {
          var updateStr = {
            $set: { name: req.body.name, password: req.body.password }
          };
          dbo.collection("user").updateOne(myobj, updateStr, function(err) {
            if (err) throw err;
            res.send({
              code: "200",
              data: "g",
              msg: "成功"
            });
            db.close();
          });
        }
      });
  });
});
module.exports = Router;
