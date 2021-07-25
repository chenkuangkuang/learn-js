// 学习typeof 及 js数据类型

function test1() {
  console.log(typeof 1); // number
  console.log(typeof "1"); // string
  console.log(typeof undefined); // undefined
  console.log(typeof null); // object
  console.log(typeof true); // boolean
  console.log(typeof Symbol); // funciton
  console.log(typeof Symbol()); // symbol

  // 引用类型都是object
  console.log(typeof []); // object
  console.log(typeof {}); // object
}


// Object.is()方法判断两个值是否是相同的值。

function test2() {
  Object.is('foo', 'foo');     // true

  Object.is('foo', 'bar');     // false
  Object.is([], []);           // false --- 和 [] == [] 的结果一致

  var test = { a: 1 };
  Object.is(test, test);       // true

  Object.is(null, null);       // true ---- 和 null == null 的结果一致

  // 特例
  Object.is(0, -0);            // false ---  和 0 == -0 结果不一致
  Object.is(-0, -0);           // true
  Object.is(NaN, 0 / 0);         // true
}

function test3() {
  console.log([] == ![]); // true

  // 解析
  /* 
  
    ==左右两边转换成数字
    []转换为数字为0
    ![] 首先是转换为布尔值，由于[]作为一个引用类型转换为布尔值为true。true再转换成false，false再转换成数字是0
  
  */
  
  /* 
  
  js中，类型转换只有3种，

  转换成数字
  转换成布尔值
  转换成字符串
  
  参考：https://juejin.cn/post/6844903974378668039#heading-27


  
  */

}

test3();