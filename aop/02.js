// 利用前面的before、after方法实现
Function.prototype.around = function (beforeFun, afterFun) {
    var _orgin = this;
    return function () {
        return _orgin.before(beforeFun).after(afterFun).apply(this, arguments);
    }
}


var originFun = function (val) {
    console.log('原型函数: ' + val);
}
let beforeFun = function () {
    console.log('before: ' + new Date().getTime())
};
let afterFun = function () {
    console.log('after: ' + new Date().getTime())
};
var newFun = originFun.around(beforeFun, afterFun);

newFun("around（环绕通知）");

  // 调用结果
  // before: 1557047939699
  // 原型函数: 测试前置通知
