const UniApp = require("express").Router();
UniApp.use((req, res, next) => {
    next();
});
UniApp.get("/login", require("../../api/getToken"));
UniApp.get("/loginout", require("../../api/loginOut"));
UniApp.get("/getinfo", require("../../api/getInfo"));
UniApp.get("/doorkey", require("../../api/doorKey"));
module.exports = UniApp;