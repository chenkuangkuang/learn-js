### 1.ES5的继承和ES6的继承 区别

    **主要是class的特性区别**
    1.class声明会提升，但不会初始化赋值，形成暂时性死区，类似let和const
    2.class内部启用严格模式（比如给一个未定义的变量赋值会报错，普通ES5则变成全局变量）
    3.class所有方法都不可枚举、没有原型对象prototype和[[constructor]]，不能使用new调用
    4.必须使用new调用class（ES5的原型函数可以直接调用）
    5.class内部无法重写类名（ES5的原型函数可以重写函数）
