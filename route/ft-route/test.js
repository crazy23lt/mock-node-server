const Test = require("express").Router();
Test.use((req, res, next) => {
    next();
});
// 登陆校验
Test.get("/", require("../../api/FT-test"));
Test.get("/", require("../../api/FT-test"));
module.exports = Test;