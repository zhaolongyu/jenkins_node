const express = require("express");
const bodyParser = require("body-parser");
// const passport = require("passport");
const jwtRouter = require("./middleware/jwtRouter");
const cors = require("cors");
// const loginRouter = require("./middleware/loginRouter");
const api = require("./api/index");
// var JwtStrategy = require("passport-jwt").Strategy,
//   ExtractJwt = require("passport-jwt").ExtractJwt;
var app = express();
app.use(
  cors({
    origin: ["http://47.100.188.145:8090"],
    methods: ["GET", "POST"],
    alloweHeaders: ["Conten-Type", "Authorization"]
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(jwtRouter("./middlewarejwtRouter"));
// app.use(loginRouter("./middlewareloginRouter"));
app.use("/", express.static(__dirname + "/public"));
app.use("/", api);
app.listen(3001);
