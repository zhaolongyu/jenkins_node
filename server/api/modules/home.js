const Router = require("express").Router();

Router.post("/pageStorage", function(req, res) {
  global.MongoClient.connect(global.url, { useNewUrlParser: true }, function(
    err,
    db
  ) {
    if (err) throw err;
    var dbo = db.db("runoob");
    var myobj = [
      {
        messageContent: req.body.messageContent,
        from: req.body.from
      }
    ];
    console.log(myobj);
    dbo.collection("sizt").insertMany(myobj, function(err) {
      if (err) throw err;
      res.send({
        code: "200",
        data: "s",
        msg: "成功"
      });
      db.close();
    });
  });
});

Router.get("/page", function(req, res) {
  global.MongoClient.connect(global.url, { useNewUrlParser: true }, function(
    err,
    db
  ) {
    if (err) throw err;
    var dbo = db.db("runoob");
    dbo
      .collection("sizt")
      .find()
      .skip(parseInt(req.query.skip))
      .limit(parseInt(req.query.page))
      .toArray(function(err, result) {
        if (err) throw err;
        res.send({
          code: "200",
          data: result,
          msg: "成功"
        });
        db.close();
      });
  });
});

Router.post("/delete", function(req, res) {
  global.MongoClient.connect(global.url, { useNewUrlParser: true }, function(
    err,
    db
  ) {
    if (err) throw err;
    var dbo = db.db("runoob");
    console.log(req.body.from);
    var whereStr = { from: req.body.from }; // 查询条件
    dbo.collection("sizt").deleteOne(whereStr, function(err, obj) {
      if (err) throw err;
      res.send({
        code: "200",
        data: "s",
        msg: "文档删除成功"
      });
      db.close();
    });
  });
});

Router.post("/update", function(req, res) {
  var fs = require("fs");
  fs.mkdir("./images", function(error) {
    if (error) {
      return false;
    }
  });
  var multiparty = require("multiparty"); //获取上传的图片功能
  var form = new multiparty.Form({
    uploadDir: "./images"
  });
  form.parse(req, function(err, fields, files) {
    var filesTmp = JSON.stringify(files);
    if (err) {
      console.log("parse error: " + err);
    }
    global.MongoClient.connect(global.url, { useNewUrlParser: true }, function(
      err,
      db
    ) {
      if (err) throw err;
      var dbo = db.db("runoob");
      fs.readFile(JSON.parse(filesTmp).file[0].path, function(err, data) {
        var myobj = {
          from: JSON.parse(filesTmp).file[0].originalFilename,
          messageContent: data.toString("utf-8")
        };
        dbo.collection("sizt").insertOne(myobj, function(err) {
          if (err) throw err;
          res.send("1");
          db.close();
        });
      });
    });
  });
});

module.exports = Router;
