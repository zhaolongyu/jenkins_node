const jwt = require("jsonwebtoken");
module.exports = r => {
  return (req, res, next) => {
    console.log(req.headers.token);
    if (req.url !== "/login" && req.headers.token) {
      jwt.verify(req.headers.token, "my_token", error => {
        console.log(req.headers.token);
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
