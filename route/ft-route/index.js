const FT = require("express").Router();
FT.use((req, res, next) => {
    next();
});
// test
FT.get("/test", require("../../api/FT-test"));
// 广告服务统计API
FT.get("/statistics", require("../../api/FT-01"));
FT.get("/echarts", require("../../api/FT-02"));
FT.get("/table", require("../../api/FT-03"));
// 图片尺寸---------------------------------
FT.get("/pic", require("../../api/FT-04"));
// 小程序---------------------------------
FT.get("/get-ad-cfg", require('../../api/FT-minapp'));
module.exports = FT;