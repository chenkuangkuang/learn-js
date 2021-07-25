/* 
下面代码中 a 在什么情况下会打印 1？

var a = ?;
if(a == 1 && a == 2 && a == 3){
    console.log(1);
}

==会调用隐式转换，隐式转换会调用本类型toString或valueOf方法

因而可以在a上声明toString或valueOf方法



*/


var a = {
  x: 0,
  toString: function () {
    return ++this.x; // 第一次调用 得到1
  }
}

// console.log('=a.toString()=', 0++); // 第一次调用返回0

// if (a == 1) {
//   console.log('=11=', 11);
// }

// if (a == 2) {
//   console.log('=22=', 22);
// }

// if (a == 3) {
//   console.log('=33=', 33);
// }

if (a == 1 && a == 2 && a == 3) {
  console.log(1);
}