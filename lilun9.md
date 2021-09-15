### 1.ES5的继承和ES6的继承 区别

**主要是class的特性区别**
1.class声明会提升，但不会初始化赋值，形成暂时性死区，类似let和const
2.class内部启用严格模式（比如给一个未定义的变量赋值会报错，普通ES5则变成全局变量）
3.class所有方法都不可枚举、没有原型对象prototype和[[constructor]]，不能使用new调用
4.必须使用new调用class（ES5的原型函数可以直接调用）
5.class内部无法重写类名（ES5的原型函数可以重写函数）

六种ES5的继承方式：(B继承A) https://www.jianshu.com/p/72fea052ed05

````javascript
// 1.原型继承
function A(){}
function B(){}
B.prototype = new A();
// 无法实现多继承


// 2.构造函数继承
function B(){
    A.call(this);
}
// 只能继承父类的属性和方法


// 3.混合继承（混合原型继承和构造函数继承）
function B(){
    A.call(this);
}
B.prototype = new A();


// 4.原型式继承：通过一个函数工厂方法？
function object(o){
    function F(){}
    F.prototype = o;
    return new F();
}

// 5.寄生式继承：创建一个仅用于封装继承过程的函数
function createAnother(original){
    var clone = object(original);
    clone.sayHi = function(){
        alert("hi);
    };
    return clone;
}

// 6.寄生组合式继承

````

### 2.类数组

 - 类数组和数组的区别
   类数组有length属性，本质上是简单对象，但无法直接使用数组方法

 - 如何把类数组转换为数组
   [].slice.call(arrayLike)
   Array.from(arrayLike)
   forEach遍历到新空数组中

### 3.如何判断一个变量是不是数组 
 - arr instanceof Array
 - Array.isArray(arr);
 - Object.prototype.toString(arr) == '[object Array]';

### 4.react和vue的区别
 - 数据的可变性
   react推崇数据不可变，比如他的函数式思想，纯组件的写法，推崇结合immutable.js，以 及sholdCompenentUpdate基于数据是否变化来做渲染的等等
   vue是基于数据响应的，除了本身的对象劫持，还有对属性的watch，computed等
 - 自由度
   react没有vue的v指令，很多事情交给第三方插件或者手动实现，比如性能优化；
   vue需要去记忆的指令也就是语法糖很多，提供了自动的性能优化，但当数据量较大时性能可能有点慢
 - 写法不同
   react推崇all in js，包括jsx，css in js ，等于把html、css都用js去写
   vue是单vue文件的，文件内html、js和css分得很开
   另外react是class和funciton的写法，vue则是对象声明的想法
 - 高级组件
   react有HOC也就是高阶组件，vue对应的是mixins的用法

 - 数据绑定上的区别
   以表单为例，react是单向的，数据变化时表单自动填入，但是想要表单变化时数据也跟着响应，就需要自己去绑定事件；vue是双向的，手动输入改变表单值，数据也自动变化，相当于vue帮你做了事件响应
 - 数据变化的渲染区别
   react以变化的组件为根，重新渲染整个子树，提供了sholdCompenentUpdate、pureComponent、memo这样的api来控制
   vue数据绑定靠的是数据劫持和发布订阅，系统精确知道哪个组件需要渲染，

**为什么选择react而不是vue**

 1.根据前期项目的经验和现有人员的技术栈经验
 2.当时的判断是react更适合大型项目而vue更适合小型项目
 3.考虑到react是大公司维护，相比vue的个人开发，出现问题能找到解决方案的可能性更高
 4.考虑同时要开发app，react和react native组成一套方案更契合

### 5.promise.all 和 promise.allSettled
 - promise.all是都成功才返回正常的结果数组，否则返回不成功的结果
 - promise.allSettled总是成功返回，返回每一项的状态和值

### 6.clearFix
 - .clearFix用于在需要清除浮动的元素上

### 7.状态码200和304的区别

 - 200是请求成功，或经过强缓存读取本地缓存
 - 304是经过协商缓存读取本地缓存

### 8.HTTP缓存原理分析

①浏览器第一次访问服务器资源 /index.html

在浏览器中没有缓存文件，直接向服务器发送请求。服务器返回 200 OK，实体中返回 index.html文件内容，并设置一个缓存过期时间，一个文件修改时间，一个根据index.html内容计算出来的实体标记Entity Tag，简称Etag。浏览器将/index.html路径的请求缓存到本地。

②浏览器第二次访问服务器资源 /index.html

由于本地已经有了此路径下的缓存文件，所以这一次就不直接向服务器发送请求了。首先，进行缓存过期判断。浏览器根据①中设置缓存过期时间判断缓存文件是否过期。

情景一：若没有过期，则不向服务器发送请求，直接使用缓存中的结果，此时我们在浏览器控制台中可以看到200 OK(from cache) ，此时的情况就是完全使用缓存，浏览器和服务器没有任何交互的。

情景二：若已过期，则向服务器发送请求，此时请求中会带上①中设置的文件修改时间，和Etag。

然后，进行资源更新判断。服务器根据浏览器传过来的文件修改时间，判断自浏览器上一次请求之后，文件是不是没有被修改过；根据Etag，判断文件内容自上一次请求之后，有没有发生变化

情形一：若两种判断的结论都是文件没有被修改过，则服务器就不给浏览器发index.html的内容了，直接告诉它，文件没有被修改过，你用你那边的缓存吧—— 304 Not Modified，此时浏览器就会从本地缓存中获取index.html的内容。此时的情况叫协议缓存，浏览器和服务器之间有一次请求交互。

情形二：若修改时间和文件内容判断有任意一个没有通过，则服务器会受理此次请求，之后的操作同①

### 9.js面向对象：继承、封装、多态

- 封装
  函数就是一种封装：1.避免污染全局变量；2.按需执行；3.多处复用
  用对象统一管理一系列属性值和方法，也起到了命名空间的作用

### 10.js的异步方案

 - 1.回调函数
 - 2.promise
 - 3.事件监听
 - 4.发布订阅
 - 5.generator
 - 6.async await （ES7）

