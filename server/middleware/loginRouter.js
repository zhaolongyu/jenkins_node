module.exports = r => {
  return (req, res, next) => {
    if (req.url === "/login" && req.body.name === "123") {
      next();
    } else {
      res.send({
        code: "201",
        data: {},
        msg: "账户密码错误"
      });
    }
  };
};
