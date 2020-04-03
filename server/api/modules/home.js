const Router = require("express").Router();

Router.get("/about", function(req, res) {
  res.send({
    code: "200",
    data: [{ list: 1 }, { list: 2 }],
    msg: "成功"
  });
});

module.exports = Router;
