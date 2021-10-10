function myNew(constructor, ...rest) {
  // 请在此处完善代码，不能直接使用 new 操作符
  // 方案一
  // var newObj = Object.create(constructor.prototype);
  var newObj = new Object();
  newObj.__proto__ = constructor.prototype;
  var returnObj = constructor.apply(newObj, rest);
  return typeof returnObj == 'object' ? returnObj : newObj;

  // 方案二
  // if (typeof constructor !== 'function') {
  //   return constructor;
  // }
  // //创建新的对象,关联构造函数的原型对象
  // const _constructor = Object.create(constructor.prototype);
  // //执行构造函数
  // const obj = constructor.apply(_constructor, rest);
  // //如果构造函数执行结果是对象则返回执行结果
  // if (typeof obj === 'object') {
  //   return obj;
  // } else {
  //   return _constructor;
  // }

  // 创建一个空的对象
  // var obj = new Object(),
  //   // 获得构造函数，arguments中去除第一个参数
  //   Con = [].shift.call(arguments);
  // // 链接到原型，obj 可以访问到构造函数原型中的属性
  // obj.__proto__ = Con.prototype;
  // // 绑定 this 实现继承，obj 可以访问到构造函数中的属性
  // var ret = Con.apply(obj, arguments);
  // // 优先返回构造函数返回的对象
  // return ret instanceof Object ? ret : obj;
}
function Fun(name, sex) {
  this.name = name;
  this.sex = sex;
  this.getName = function () {
    return this.name;
  }
}


const fun = myNew(Fun, '子君', '男');

Fun.prototype.getUserInfo = function () {
  return `我的姓名${this.name},我的性别${this.sex}`
}


console.log('=fun=', fun);
// 我的姓名子君，我的性别男
console.log(fun.getName())
console.log(fun.getUserInfo())

/*

在手写new实现中，如果使用
var newObj = Object.create(null);
newObj.__proto__ = constructor.prototype
实际上无法建立原型链关系
导致报错：fun.getUserInfo is not a function

原因是 Object.create(null) 创建的对象没有__proto__属性

*/
