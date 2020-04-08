const jwt = require("jsonwebtoken");
module.exports = r => {
  return (req, res, next) => {
    if (req.url !== "/regis" && req.url !== "/login" && req.headers.token) {
      jwt.verify(req.headers.token, "my_token", error => {
        if (error) {
          res.status(401).send({
            code: "401",
            data: "401",
            msg: "时间过期重新登录"
          });
        } else {
          next();
        }
      });
    } else {
      next();
    }
  };
};
