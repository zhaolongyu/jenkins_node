const Router = require("express").Router();
const login = require("./modules/login");
const home = require("./modules/home");
Router.use("/", login);
Router.use("/", home);

module.exports = Router;
