const Router = require("express").Router();

global.MongoClient = require("mongodb").MongoClient;
//生产
// global.url = "mongodb://47.100.188.145:27017/";
global.url = "mongodb://localhost:27017/";

const login = require("./modules/login");
const home = require("./modules/home");
Router.use("/", login);
Router.use("/", home);

module.exports = Router;
