const axios = require("axios");
const Mock = require("mockjs");
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MTE4MzM1MDgsImV4cCI6MTY0MzM2OTUwOCwiYXVkIjoidXNlciIsInVpZCI6IjYzRkMzOEQyMDY2NEFGNTRDMEZGRTZCNkEwREU3RTREIiwicGhvbmUiOiIxMzYzNjA2NTg5MCJ9.fg5uKGN7mnNSi6Dhp5tch5Up46q_l_buCb260nODZk8PtZ-l3L5qCqffMja--r84CN5OC_qiGmBX8XHveFMT9brnBCDZnpl98cY7Bb6HBwmjWsN-OAy-sl6lyK_4fd5ue22CfrDX0z8CQL2ZfdE2-pIEhicxpXmDfIdekXAHZoQ";
const instance = axios.create({
    baseURL: "http://223.2.84.230:6201/",
    timeout: 30000,
    headers: { Authorization: "Bearer " + token },
});
let paramsList = Mock.mock({
    "item|1000": [
        {
            "type|1-3": 1,
            "source_type|1-3": 1,
            "ad_type|1-3": 1,
            "position_type|1-7": 1,
        },
    ],
});
let axiosArr = [];
for (let i = 0; i < paramsList.item.length; i++) {
    axiosArr.push(instance.post("mainapp/v3/user/report-ad", paramsList.item[i]));
}
axios.all(axiosArr).then(axios.spread(function (arg) {
    console.info(arg.data.msg)
}));