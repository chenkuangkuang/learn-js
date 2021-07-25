var company = {
  address: 'beijing'
}
var yideng = Object.create(company);
console.log('=yideng=', yideng); // {}
delete yideng.address
console.log(yideng.address); // beijing

/* 

yideng 通过 prototype 继承了 company的 address。yideng自己并没有address属性。所以delete操作符的作用是无效的。

Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。

*/

