console.log([] + []); // => ''
// 转换成了字符串处理


console.log({} + []); // => [object Object] + '' = [object Object]
// 转换成字符串处理

console.log([] == ![]); // => true
// 先转换成数字 0 和 布尔值 false, false转换成数字0,0 = 0 =》true

console.log(true + false); // => 1
// 原本以为是 'truefalse' 实际上是转换成数字 0+1 = 1