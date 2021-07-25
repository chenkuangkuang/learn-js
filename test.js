const str = 'abc[88]'; 

// let re = str.replace(/(\S+)\[[0-9]+\]/g, '$1');

// re = str.replace(/\S+\[([0-9]+)\]/g, '$1');


// c[0] => c.0

// let re = str.replace(/(\S+)\[([0-9]+)\]/, '$1.$2');
let re = str.replace(/\[(\d+)\]/, '.$1');

console.log(re, str);


// function test(person) {
//   person.age = 26
//   person = {
//     name: 'hzj',
//     age: 18
//   }
//   return person
// }
// const p1 = {
//   name: 'fyq',
//   age: 19
// }
// const p2 = test(p1)
// console.log(p1) // -> ?
// console.log(p2) // -> ?


// async function async1() {
//   console.log('async1 start');
//   await async2();
//   console.log('async1 end');
// }
// async function async2() {
//   //async2做出如下更改：
//   new Promise(function(resolve) {
//   console.log('promise1');
//   resolve();
// }).then(function() {
//   console.log('promise2');
//   });
// }
// console.log('script start');

// setTimeout(function() {
//   console.log('setTimeout');
// }, 0)
// async1();

// new Promise(function(resolve) {
//   console.log('promise3');
//   resolve();
// }).then(function() {
//   console.log('promise4');
// });

// console.log('script end');

// script start
// async1 start
// promise1
// promise3
// script end
// 
// 微任务清单：promise2在async1 end之前
// promise2
// async1 end
// promise4
// script end


// async function async1() {
//   console.log('async1 start');
//   await async2();
//   console.log('async1 end');
// }
// async function async2() {
//   console.log('async2');
// }

// console.log('script start');

// setTimeout(function () {
//   console.log('setTimeout');
// }, 0)

// async1();

// new Promise(function (resolve) {
//   console.log('promise1');
//   resolve();
// }).then(function () {
//   console.log('promise2');
// });

// console.log('script end');

// 第一轮宏任务：
// script start
// async1 start
// async2
// promise1
// script end

// 第一轮宏任务列入的微任务列表（宏任务之后马上执行）：
// async1 end
// promise2

// 第二轮宏任务：
// setTimeout


// 在某一个macrotask执行完后，就会将在它执行期间产生的所有microtask都执行完毕

// 实际上await是一个让出线程的标志。await后面的表达式会先执行一遍，将await后面的代码加入到microtask中，然后就会跳出整个async函数来执行后面的代码。

// async function asyncX() {
//   console.log('async1 start');
//   await async2();
//   console.log('async1 end');
// }

// // 等价于

// async function asyncX() {
//   console.log('async1 start');
//   Promise.resolve(async2()).then(() => {
//     console.log('async1 end');
//   })
// }


// 执行顺序：
// script start，
// async1 start，
// async2
// async1 end
// promise1，
// script end
// setTimeout
// promise2



// function compose(...func) {
//   return function(...args) {
//     return func.reduceRight((acc, cur) => {
//       return typeof acc === 'function' ? cur(acc(...args)) : cur(acc)
//     })
//   }
// }
// const x = x => x+1;
// const y = x => x*2;
// const z = x => x-2;

// const c = compose(x, y, z);
// const res = c(2) // 1
// console.log('=res=', res);

// const add = function (a, b, c) {
//   return a + b + c;
// }

// const curry = function (func, args) {
//   // 获取func的参数个数？
//   var funcLen = func.length;
//   var argsTemp = args || [];
//   return function () {
//     var allArgsArr = [].slice.call(arguments);
//     allArgsArr = [...argsTemp, ...allArgsArr];
//     console.log('=allArgsArr=', allArgsArr, funcLen);
//     if (allArgsArr.length < funcLen) {
//       return curry.call(this, func, allArgsArr);
//     }
//     return func.call(this, ...allArgsArr)
//   }
// }

// const addCurry = curry(function (a, b, c) {
//   return a + b + c;
// });

// const res = addCurry(2)(2)(3);
// console.log('=res=', res); // 7

// var a = 2, b = 2;
// console.log('=b++=', b++);
// var a = 0,
//   b = 0;
// function A(a) {
//   A = function (b) {
//     let x = 2, y = 2;
//     const c = (x + y++);
//     console.log('=a, b=', c);
//     console.log('=y=', y);
//     // console.log(a + b++);
//   };
//   console.log('=a=', a);
//   console.log(a++);
// }
// A(1); // 2
// A(2); // 3


// function curry(func, args) {
//   // 表示所需要参数的个数
//   let funcLen = func.length;
//   let argsTemp = args || [];

//   return function() {
//     // 由于参数是一个类数组不是真正的数组，这里需要转换一下
//     let _args = [].slice.call(arguments);
//     _args = [...argsTemp, ..._args]
//     console.log('=_args=', _args);
//     // 如果参数的数量还不足，则还需要递归收集参数
//     if (_args.length < funcLen) {
//       return curry.call(this, func, _args);
//     }
//     console.log('22=_args=', _args);
//     // 收集完毕则执行func函数
//     return func.apply(this, _args);
//   }
// }

// var add = curry(function(a,b,c){
//   return a+b+c
// })
// var res1 = add(2)(2)(3) // 7
// console.log('=res=', res1);

// // 手写 new
// function myNew(Func) {
//   // 创建一个新对象
//   var newObj = Object.create(null);
//   // 将对象的原型对象与Func的原型绑定，newObj即可访问Func原型中的属性
//   newObj._proto_ = Func.prototype;
//   // 取得调用new传入的参数
//   var restArgs = Array.prototype.slice.call(arguments, 1);
//   // 将this指向newObj，执行构造函数Func，得到构造函数返回值
//   var res = Func.apply(newObj, restArgs);
//   // 如果有返回值，优先返回返回值，如果没有，则返回新创建的newObj
//   return res instanceof Func ? res : newObj;
// }



// // 手写bind
// Function.prototype.myBind = function (newObj) {
//   var _this = this; // this指向当前需要修改this的方法
//   var bindArgs = Array.prototype.slice.call(arguments, 1); // 取bind方法传进来的参数
//   return function () {
//     // var args = [...bindArgs, ...arguments]; // 将bind方法传入的参数和当前已经修改了this的方法传入的参数混合
//     _this.apply(newObj, [...bindArgs, ...arguments]);
//   }
// }

// var obj1 = {
//   name: 'obj1',
//   func: function () {
//     console.log('=this=', this.name);
//   }
// }

// var obj2 = {
//   name: 'obj2',
// }

// //用法：
// var bindFunc = obj1.func.myBind(obj2);
// bindFunc();


// ---------------------------------------------

// 手写Promise

// var func1 = function(last) {
//   return new Promise((resolve, reject)=>{
//     setTimeout(() => {
//       console.log(`last:${last}`, 1);
//       resolve(1);
//     }, 100);
//   });
// };

// var func2 = function(last) {
//   return new Promise((resolve, reject)=>{
//     setTimeout(() => {
//       console.log(`last:${last}`, 2);
//       resolve(2);
//     }, 200);
//   });
// };

// var func3 = function(last) {
//   return new Promise((resolve, reject)=>{
//     setTimeout(() => {
//       console.log(`last:${last}`, 3);
//       resolve(3);
//     }, 300);
//   });
// };

// // 写法一 输出 f1 f2
// func1().then(func2()).then(func3)

// // // 写法二 输出 f1 f2
// f1().then(function () {
//   f2();
// }).then(f3)

// // 写法三 输出 f1 f2
// f1().then(f2()).then(f3)

// // // 写法四  输出 f1
// f1().then(f2).then(f3)


// function myPromise(promiseCallback) {
//   this.status = 'pending';
//   this.successCallbackArr = [];
//   this.failCallbackArr = [];


//   var _this = this;
//   this.resolve = function (value) {
//     _this.status = 'success';
//     _this.successCallbackArr.map(i => {
//       i && i(value);
//     })
//   }

//   this.reject = function (reason) {
//     _this.status = 'fail';
//     _this.failCallbackArr.map(i => {
//       i && i(reason);
//     })
//   }

//   try {
//     promiseCallback(this.resolve, this.reject);
//   } catch (error) {
//     this.reject(error)
//   }



//   return this;
// }

// myPromise.prototype.then = function (successCallback, failCallback) {
//   console.log('=this.status=', this.status);
//   if (this.status == 'success') {
//     successCallback(this.value);
//   }else if (this.status == 'fail') {
//     failCallback(this.value);
//   }else if(this.status == 'pending') {
//     this.successCallbackArr.push(successCallback);
//     this.failCallbackArr.push(failCallback);
//   }
// }

// var p1 = new myPromise(function (resolve, reject) {
//   console.log('myPromise=p1',);

//   setTimeout(() => {
//     console.log('myPromise=延迟执行的func',);
//     resolve('myPromise=resole的值');
//   }, 1000);
//   setTimeout(() => {
//     p1.then(() => {
//       console.log('myPromise=p1的then2=');
//     })
//   }, 1500);
// });

// p1.then((val) => {
//   console.log('myPromise=p1的then=', val);
// })


// // var p2 = new Promise(function (resolve, reject) {
// //   console.log('promise=p2',);
// //   setTimeout(() => {
// //     console.log('promise=延迟执行的func',);
// //     resolve('promise=resole的值');
// //   }, 1000);
// // });

// // p2.then((val) => {
// //   console.log('promise=p2的then=', val);
// // })