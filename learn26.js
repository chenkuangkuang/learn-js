var x=1;
if (function f() { }) {
  console.log('=typeof f=', typeof f); // undefined
    x += typeof f;
}
console.log(x); // 1undefined


/* 

函数声明写在运算符中，其为true，

放在运算符中的函数声明在执行阶段是找不到的。

对未声明的变量执行typeOf不会报错，会返回undefined

*/
