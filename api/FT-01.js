const Mock = require('mockjs');
const Random = Mock.Random;
module.exports = async (req, res) => {
    var data = Mock.mock({
        'exposure_total': {
            'llz_extract_total|5000-100000': 1,
            'ylh_extract_total|5000-100000': 1,
            'pt_extract_total|5000-100000': 1
        },
        "click_total": {
            'llz_extract_total|5000-100000': 1,
            'ylh_extract_total|5000-100000': 1,
            'pt_extract_total|5000-100000': 1
        },
        "extract_total": {
            'llz_extract_total|5000-100000': 1,
            'ylh_extract_total|5000-100000': 1,
            'pt_extract_total|5000-100000': 1
        },
    });
    res.send({
        meta: {
            message: 'success'
        },
        code: 200,
        data: data,
        params: req.query
    })
}