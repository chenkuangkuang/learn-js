function f() {}
console.log(f.prototype === Object.getPrototypeOf(f)); // false


/* 


f.prototype 是 f的实例对象的原型
f.prototype = (new f())._proto_

Object.getPrototypeOf(f) 是 f的原型


*/

console.log(f.prototype === Object.getPrototypeOf(new f())); // true


console.log(Object.getPrototypeOf(f) === Function.prototype); // true