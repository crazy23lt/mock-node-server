const Mock = require('mockjs');
const Random = Mock.Random;
module.exports = async (req, res) => {
    let i = 1;
    let data = Mock.mock({
        'lists|10': [{
            "area|1-5": "★",
            "server|1-5": "★",
            "terminal|1-5": "★",
            "position|+1": 1,
            "pull|5000-100000": 1,
            "click|5000-100000": 1,
            "exp|5000-100000": 1,
            'now': '@now("yyyy-MM-dd")',
            'time|+1': function () {
                let now = new Date(this.now);
                now.setTime(now.getTime() - i++ * 24 * 60 * 60 * 1000);
                let sub = now;
                var year = sub.getFullYear() < 10 ? '0' + sub.getFullYear() : sub.getFullYear();
                var month = sub.getMonth() + 1 < 10 ? '0' + (sub.getMonth() + 1) : sub.getMonth() + 1
                var day = sub.getDate() < 10 ? '0' + sub.getDate() : sub.getDate();
                return year + '-' + month + '-' + day;
            },
        }]
    });
    res.send({
        code: 200,
        data: { lists: data.lists, total: 120 },
        mag: ""
    })
}