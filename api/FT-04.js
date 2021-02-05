const Mock = require('mockjs');
const Random = Mock.Random;
module.exports = async (req, res) => {
    const { width, height, msg, color, bgcolor } = req.query;
    let data = Mock.mock(Random.image(`${width}x${height}`, bgcolor, color, 'png', msg));
    res.send({
        code: 200,
        data: data,
        mag: ""
    })
}