### 1.document.documentElement

    document: 整个document文档
    document.documentElement：指向html元素
    document.body：指向body元素


### 2.js中所有函数的参数都是按值传递的

    针对基本类型：

    ````javascript

    let name = 'ConardLi';
    // 注意 传与不传name的区别，不传name，则操作的是全局变量name，传name则操作的是局部参数name
    function changeValue(name){ 
        name = 'code秘密花园';
    }
    changeValue(name);
    console.log(name); // 'ConardLi'

    ````

    针对引用类型：

    ````javascript

    let obj = {name:'ConardLi'};
    function changeValue(obj){
        obj.name = 'code秘密花园';
    }
    changeValue(obj);
    console.log(obj.name); // code秘密花园

    ````

### 3.null和undefiend区别

    null是赋值过的对象，被特意赋值为null，表示空，转换数值为0

    undefined 表示缺少值，还没有定义的，转换为数值为NaN


### 4.Symbol类型注意事项

    1.Symbol也可以创建两个相等的Symbol变量，使用Symbol.for(key)，表示搜索现有Symbol，没有则创建新的

    2.Symbol创建变量直接使用Symbol(……)，使用new 会报错

    3.Symbol作为对象属性，无法被普通方法枚举，只能使用特定方法getOwnPropertySymbols

    ````javascript

    var obj = {
        name:'ConardLi',
        [Symbol('name2')]:'code秘密花园'
    }
    Object.getOwnPropertyNames(obj); // ["name"]
    Object.keys(obj); // ["name"]
    for (var i in obj) {
        console.log(i); // name
    }
    Object.getOwnPropertySymbols(obj) // [Symbol(name)]

    ````

    4.Symbol的使用场景

        - react中创建的dom组件有一个typeof属性，值是Symbol类型，用于防止XSS

        - 私有属性

        - 防止属性污染


### 5.包装类型

    参考：https://juejin.cn/post/6844903854882947080?from=main_page

    为了便于操作基本类型值，ECMAScript还提供了几个特殊的引用类型，他们是基本类型的包装类型

    - Boolean

    - Number

    - String

    注意包装类型和基本类型的区别

    ````javascript

        true === new Boolean(true); // false

        true === Boolean(true); // true

        typeof new Boolean(true); //　object

    ````

    基本类型调用属性和方法的过程，就是后台创建包装类型，然后使用包装类型调用属性或方法，再转换回基本类型的过程

    ````javascript

    var name = "test";

    name.substring(2); //在后台创建包装类型，变成object，再调用substring等方法

    ````

    关于类型转换：

        - 引用类型转换为Number类型，先调用valueOf，再调用toString
        - 引用类型转换为String类型，先调用toString，再调用valueOf

    ![转换规则](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/6/1/16b128d2444b90ce~tplv-t2oaga2asx-image.image)

    判断变量类型的技巧

    原始类型直接使用typeof，引用类型使用Object.prototype.toString.call取得类型


### 6.localStorage等本地缓存使用技巧

    使用一个变量比如store整体存储或读取localStorage，在页面刷新时取localStorage到store中，这样在需要单个缓存数据时，不必每次都localStorage.getItem

### 7.setTimeout的最小执行时间

    HTML5标准规定setTimeout第二个参数不得小于4毫秒，低于4毫秒将以4毫秒执行

    ````javascript

    console.log('script start');

    setTimeout(function() {
        console.log('setTimeout');
        console.log('time=2', Date.now()); // 1628126338247 多了4秒
    }, 0);

    console.log('script end');

    console.log('time=', Date.now()); // 1628126338243


    ````


### 8.什么是暂时性死区？

    关键点是let/const 和 var 的区别。前者会产生暂时性死区，在定义之前无法使用变量

    ````javascript

    console.log(a); // undefined
    var a = 1;

    console.log(b); // 报错：（引用错误）‘Uncaught ReferenceError: Cannot access ‘a’ before initialization’
    let b = 1;

    ````

### 9.react为什么改变生命周期，为什么要使用hook

    在react使用fiber之后，will_类型的生命周期可能会出现调用多次的情形，所以放弃

    hook的出现，是基于纯函数的优势，以及更好的组件复用

    **Fiber** 翻译为任务切片，或可中断更新，解决react15及之前的版本虚拟dom的diff同步卡顿问题

### 10.webpack的构建流程？打包原理？loader和plugin的区别？tree-shaking？webpack loader的执行顺序？热更新原理？webpack的优化？

    **构建流程**
    1.读取配置，识别入口文件
    2.逐层识别模块依赖
    3.对代码的分析、转换、编译
    4.输出到最终文件

    > Webpack在启动后，会从Entry开始，递归解析Entry依赖的所有Module，每找到一个Module，就会根据Module.rules里配置的Loader规则进行相应的转换处理，对Module进行转换后，再解析出当前Module依赖的Module，这些Module会以Entry为单位进行分组，即为一个Chunk。因此一个Chunk，就是一个Entry及其所有依赖的Module合并的结果。最后Webpack会将所有的Chunk转换成文件输出Output。在整个构建流程中，Webpack会在恰当的时机执行Plugin里定义的逻辑，从而完成Plugin插件的优化任务。


    **chunk 和 bundle 的区别**
    chunk 是打包过程中的模块文件
    bundle 是打包结果

    ![chunk和bundle的区别](https://image-1255652541.cos.ap-shanghai.myqcloud.com/uPic/image-20200518210532171.png)

    **什么是AST**
    AST是抽象语法树，由源代码转化而来，便于编译器、插件等对代码进行处理

    **loader是编译转换器，plugin用于增强webpack的功能，babel是js编译器**

    **tree-shaking是什么**
    引入模块时，不引入全部，只引入需要的代码

    **loader的执行顺序**
    webpack的加载时从右往左进行

    ````javascript

    {
        test: /\.less$/,
        use: [
            'style-loader',
            'css-loader',
            'less-loader'
        ]
    }

    ````

    **webpack热更新原理**
    用wepack-dev-server启动一个服务，浏览器和服务端经过websocket进行长连接，webpack内部的watch监听文件修改。发生修改时webpack重新打包编译到内存中，webpack-dev-server依赖中间件和webpack交互，请求一个携带hash值的json和js文件。

    **webpack优化**


