import { print } from './print'

function component() {
    var element = document.createElement('div');
    element.innerHTML = "Hello Webpack"
    var btn = document.createElement('button');
    btn.innerHTML = '点击获取环境变量';
    btn.onclick = print;
    element.appendChild(btn);
    return element;
}

document.body.appendChild(component());