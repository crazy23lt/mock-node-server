let takePhoto = function () {
    console.log('拍照片');
}
// 给 takePhoto 添加属性 after
Object.defineProperty(takePhoto, 'after', {
    writable: true,
    value: function () {
        console.log('加滤镜');
    },
});
// 给 takePhoto 添加属性 before
Object.defineProperty(takePhoto, 'before', {
    writable: true,
    value: function () {
        console.log('打开相机');
    },
});
// 包装方法
let aop = function (fn) {
    return function () {
        fn.before()
        fn()
        fn.after()
    }
}
takePhoto = aop(takePhoto)
takePhoto()
