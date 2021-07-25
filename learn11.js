// 请写出如下代码的打印结果

function Foo() {
  Foo.a = function () {
    console.log(1)
  }
  console.log('=this=', this);
  this.a = function () {
    console.log(2)
  }

  this.b = function () {
    console.log('b')
  }

  Foo.c = function () {
    console.log('c')
  }


}
Foo.prototype.a = function () {
  console.log(3)
}
Foo.a = function () {
  console.log(4)
}
Foo.a();//4

let obj = new Foo();

obj.a(); // 2

// 构建方法里已经替换了全局 Foo 上的 a 方法
Foo.a(); // 1

Foo.b(); // Foo.b is not a function

/* 
为什么function Foo里面的Foo.a 和 this.a 不相同？

1.本身就不相同

2.根据 Foo.b(); // Foo.b is not a function 可以得知 Foo.b 和 this.b不相等


*/

