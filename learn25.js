function f() {
  return f;
}
console.log('=new f()=', new f()); // [Function: f]
console.log(new f() instanceof f); // false


function b() {
  
}
console.log('=new b()=', new b()); // b {}
console.log(new b() instanceof b); // true

/* 

new f() 返回的是 f 这个函数。
而 o instanceOf O的实现原理是，检测o的原型链上有没有O.prototype 即 o.proto == O.prototype || o.proto.proto == O.prototype。调试可以看出，两者并不相同。

new b() 返回的是 新对象

*/
