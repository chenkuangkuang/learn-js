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
