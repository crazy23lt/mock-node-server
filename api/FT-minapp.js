const Mock = require("mockjs");
module.exports = async (req, res) => {
    let flag = 0;
    // /{1: "首页 750*810", 2: "钥匙页 375*380", 3: "开锁框 128*290", 4: "banne", 5: "开屏页",6: "弹窗"}
    let weightArr = [
        { liuliang: 5, platform: 5 },
        { liuliang: 5, platform: 5 },
        { liuliang: 5, platform: 5 },
        { liuliang: 0, platform: 10 },
        { liuliang: 5, platform: 5 },
        { liuliang: 5, platform: 5 },
    ];
    let data = Mock.mock({
        "list|6": [
            {
                "type|+1": 1,
                weight: function () {
                    return weightArr[flag++]
                }
            },
        ],
    });
    res.send({
        errcode: 200,
        data: data.list,
        msg: "成功",
    });
};
