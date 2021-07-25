// 如何获取 html 元素实际的样式值

const dom = document.getElementById('juejin');
console.log(dom.style);
console.log(window.getComputedStyle(dom));