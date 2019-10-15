import Loading from './control/loading';

window.siReadyFuncs = [];

window.siReady = function(func) {
    siReadyFuncs.push(func);
};

window.onload = function () {
    // 加载js的ui组件
    let silicon = {};
    silicon.Loading = Loading;
    window.silicon = silicon;
    // 执行ready函数
    for (let func of window.siReadyFuncs) {
        func();
    }
};
