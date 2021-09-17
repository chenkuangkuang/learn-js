## 重点面试问题汇总

### 1.从浏览器输入url到展示页面的过程（涉及缓存、http通信流程、状态码、html读取加载的顺序和注意事项）

 - 过程：
   1.解析输入：非URL，调用搜索引擎；URL结构的字符串，构建完整URL，浏览器进程通过进程通信传递给网络进程[1.chrome的多进程架构]
   2.查看是否存在DNS缓存[2.DNS缓存查询步骤]，有则直接匹配到IP地址，否则查询DNS服务器获取真实IP。然后解析IP得到真实物理MAC地址；
   3.通信过程：1.TCP连接（三次握手）；2.TCP数据传输，发送HTTP请求[3.HTTP缓存]；3.断开连接（四次挥手）
   4.浏览器自上而下解析html，经过词法分析、语法分析，构建DOM树，遇到css去请求而不阻塞，并构建css树，再结合DOM树和CSS树搭建render树[4.生命周期事件]，遇到js链接，由于js可能会修改dom所以会阻塞[5.script的defer和async]。  
   5.生成render tree之后的步骤：布局（第二次叫回流），分层（渲染合成层），生成绘制列表，光栅化和显示（后三步称为重绘）

   [1.chrome的多进程架构]
    - 1.浏览器进程，负责用户界面和子进程管理与通信
    - 2.渲染进程，将HTML、css和js转换为用户界面
    - 3.网络进程
    - 4.CPU进程，UI绘制到像素点
    - 5.插件进程

   [2.DNS缓存查询步骤]
    - 1.浏览器是否有DNS缓存；
    - 2.本地操作系统是否有DNS缓存（host文件）
    - 3.查询电信运营商的DNS服务器
    - 4.查询根服务器

   [3.HTTP缓存]
    - 1.强缓存和协商缓存：

        **强缓存**：直接在缓存中读取资源，network显示200，size显示from disk cache。
        强缓存通过设置Expires 和 Cache-Control实现。Expires是HTTP1.0的配置项，指定资源到期时间，问题是服务器时间和本地时间可能不一致
        Cache-Control是HTTP1.1产物，max-age=300表示相对时间300秒，no-cache表示不读本地缓存，依据协商缓存而定，no-store表示完全不缓存，Cache-Control优先级更高

        **协商缓存**:浏览器携带缓存标识向服务器发请求，由服务器决定是否使用缓存
        协商缓存通过设置Last-Modified 和 ETag 实现。Last-Modified表示资源的最后修改时间，ETag表示资源的标识符
        第一次请求资源，reponse添加Last-Modified的header，下次浏览器请求时添加If-Modified-Since这个header，值就是Last-Modified的值
        ETag和If-None-Match是HTTP1.1的产物，用于解决Last-Modified的不足(可能修改了但内容无变化)

   [4.生命周期事件]
    - 1.DOMContentLoaded
        表示DOM树构建完毕，可以安全地访问所有node节点和绑定事件

    - 2.load
        表示所有资源加载完毕，图片、背景、内容都已完成渲染，页面可交互

   [5.script的defer和async]
    - 1.没有属性，立即加载并执行脚本
    - 2.async属性，异步加载和执行
    - 3.defer仅加载，异步执行（等到文档所有元素解析完成之后，DOMContentLoaded事件触发执行之前）

### 2.原型链相关，prototype, __proto__，继承类型等

 - prototype和__proto__的区别
   0.prototype叫显式原型，__proto__叫隐式原型
   1.对象只有__proto__属性，prototype属性属于构造函数，函数同时也有__proto__属性
   2.构造函数的prototype指向其原型对象，构造函数new出来的实例对象共有原型对象的属性和方法
   3.构造函数的原型对象的constuctor指向构造函数
   4.实例的__proto__指向构造函数的prototype
   5.构造函数也有__proto__，指向构造函数的构造函数的原型对象，也就是Function.prototype
   6.原型对象的__proto__指向Object.prototype
   7.最后，Object.prototype的__proto__指向null

 - 对象访问属性或方法的过程
   就近原则，优先访问自己的实例，没有则访问原型对象，再没有则继续顺着原型链网上查找，直到顶端，实在没有就返回undefined

 - Object.getPrototypeOf，isPrototypeOf，instanceof

 - 继承类型
### 3.性能优化：js优化、css优化、html优化，图片懒加载

 - 1.css优化
   

### 4.css常见坑：BFC和z-index，双margin重叠，幽灵空白节点，居中问题，常见布局

### 5.webpack关键配置项，工作流程，babel和plugin的区别，常用的babel和plugin，执行顺序，优化手段

 - webpack工作流程
   1.读取配置识别入口文件
   2.递归解析得到依赖module
   3.根据loader转换处理
   4.依赖分组得到chunk
   5.得到output
   6.在某些生命周期执行plugin
   7.输出文件
   
 - webpack优化
 https://github.com/dwqs/blog/issues/52

### 6.常见算法：防抖，节流，排序（冒泡、快速、选择），深度克隆，数组扁平，柯里化，数组去重

### 7.常见设计模式：观察者、订阅发布

### 8.前端安全：XSS和CSRF，http加密，对称加密和非对称加密

- XSS Cross Site Script 跨站脚本攻击
  举例比如攻击者在富文本框填入js代码，后台生成评论，被攻击者访问此评论，js被执行，获取到被攻击者的隐私数据或篡改网页

- CSRF Cross Site request forgery 跨站请求伪造
  比如攻击者伪造页面A，引导用户在登录了网站B的情况下自动触发页面A中的请求，以实现页面B的操作（本质上就是使用了用户在网站B的cookie）

### 9.js有哪些报错类型

 - SyntaxError（语法错误）
 - ReferenceError（引用错误）// not defined
 - RangeError (范围错误) // var a = new Array(-1)
 - TypeError (类型错误) // 调用不存在的方法
 - URIError (URL错误) url相关函数参数不正确
 - EvalError (eval错误)

 - 手动抛出错误

 throw new Error("出错了！"); 
 throw new RangeError("出错了，变量超出有效范围！"); 
 throw new TypeError("出错了，变量类型无效！");

### 11.手写系列：promise，new，bind，call，instanceof，完整准确的类型判断，JSON.stringify和JSON.parse

### 12.常见正则：手机号、邮箱、

### 13.RN的通信方式、热更新原理、link的含义、

### 14.js和css基础中的基础：数据类型种类、
