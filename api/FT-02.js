const Mock = require("mockjs");
module.exports = async (req, res) => {
    let data = Mock.mock({
        "list|7-30": [
            {
                "fromNowOn|+1": 1,
                now: '@now("yyyy-MM-dd")',
                "time|+1": function () {
                    let now = new Date(this.now);
                    now.setTime(now.getTime() - this.fromNowOn * 24 * 60 * 60 * 1000);
                    let sub = now;
                    var year =
                        sub.getFullYear() < 10
                            ? "0" + sub.getFullYear()
                            : sub.getFullYear();
                    var month =
                        sub.getMonth() + 1 < 10
                            ? "0" + (sub.getMonth() + 1)
                            : sub.getMonth() + 1;
                    var day = sub.getDate() < 10 ? "0" + sub.getDate() : sub.getDate();
                    return year + "-" + month + "-" + day;
                },
                "exposure_total|5000-100000": 1,
                "click_total|5000-100000": 1,
                "extract_total|5000-100000": 1,
            },
        ],
    });
    res.send({
        meta: {
            message: "success",
        },
        code: 200,
        data: data.list,
        params: req.query,
    });
};
