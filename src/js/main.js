import Loading from './control/Loading';
import Dropdown from './control/Dropdown';

window.siReadyFuncs = [];

window.siReady = function(func) {
    siReadyFuncs.push(func);
};

window.onload = function () {
    // 加载js的ui组件
    let silicon = {};
    silicon.Loading = Loading;
    silicon.Dropdown = Dropdown;
    window.silicon = silicon;
    // 执行ready函数
    for (let func of window.siReadyFuncs) {
        func();
    }
};
