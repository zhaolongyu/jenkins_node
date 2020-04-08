const Router = require("express").Router();

const login = require("./modules/login");
const home = require("./modules/home");
const submit = require("./modules/submit");
Router.use("/", login);
Router.use("/", home);
Router.use("/", submit);

module.exports = Router;
