// 判断一个变量是否为数组

const a = [];

console.log(a instanceof Array); // true
console.log(Object.prototype.toString.call(a)); // [object Array]
console.log(Array.prototype.isPrototypeOf(a) ); // true