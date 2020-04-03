const express = require("express");
const bodyParser = require("body-parser");
// const passport = require("passport");
const jwtRouter = require("./middleware/jwtRouter");
// const loginRouter = require("./middleware/loginRouter");
const api = require("./api/index");
// var JwtStrategy = require("passport-jwt").Strategy,
//   ExtractJwt = require("passport-jwt").ExtractJwt;
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(jwtRouter("./middlewarejwtRouter"));
// app.use(loginRouter("./middlewareloginRouter"));

app.use("/", api);

app.listen(3001, () => {
  console.log("成功");
});
