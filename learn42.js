function F() {
  this.a = 1;
}
var obj = new F();
console.log(obj.prototype); // undefined

/* 

原因：对象只有_proto_属性，没有prototype属性，prototype属性属于构造函数

*/



