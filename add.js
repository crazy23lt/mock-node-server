const axios = require("axios");
const Mock = require("mockjs");
const Random = Mock.Random;
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MTM2MTEyOTgsImV4cCI6MTY0NTE0NzI5OCwiYXVkIjoidXNlciIsInVpZCI6IjYzRkMzOEQyMDY2NEFGNTRDMEZGRTZCNkEwREU3RTREIiwicGhvbmUiOiIxMzYzNjA2NTg5MCJ9.S2yICqtdA6XOhQBxz-vMJbHqE9wfKjhe_AooQB7wMg4FlF0U_a6LlZESvui2Upxn9wrrVyrjmAUDyFw2_aInVlTSHgSfDhh_NBvbUeEZxa0HXTCOytRpYWIJdbusTEJ6luSDpT58foliLmXihxTa2VmZJi068l9L59-HHyZAybQ";
const instance = axios.create({
    baseURL: "http://223.2.84.230:6201/",
    timeout: 30000,
    headers: { Authorization: "Bearer " + token },
});
const timeFn = function () {
    let time = Random.date();
    let arrTime = time.split("-");
    while (arrTime[0] < 2017) {
        time = Random.date();
        arrTime = time.split("-");
    }
    return time;
};
let paramsList = Mock.mock({
    "item|1000": [
        {
            "type|1-3": 1,
            "source_type|1-3": 1,
            "ad_type|1-3": 1,
            "position_type|1-7": 1,
            "day": function () {
                return timeFn()
            }
        },
    ],
});
let axiosArr = [];
for (let i = 0; i < paramsList.item.length; i++) {
    axiosArr.push(instance.post("mainapp/v3/user/report-ad", paramsList.item[i]));
}
axios.all(axiosArr).then(axios.spread(function (arg) {
    console.info(arg.data.msg)
})).catch(error => {
    console.error(error)
});