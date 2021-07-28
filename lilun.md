### 1.react-router 里的 <Link> 标签和 <a> 标签有什么区别

  <Link>和<a>渲染结果相同都是得到a链接，不同在于
  react-router会接管Link链接的默认行为，实现不刷新更新dom，
  a标签依然会跳转并刷新页面


### 2.如何禁掉 <a> 标签默认事件，禁掉之后如何实现跳转

  e.preventDefault()


### 3.a.b.c.d 和 a['b']['c']['d']，哪个性能更高？

  应该是 a.b.c.d 比 a['b']['c']['d'] 性能高点，后者还要考虑 [ ] 中是变量的情况，再者，从两种形式的结构来看，显然编译器解析前者要比后者容易些，自然也就快一点。


### 4.已知如下代码，如何修改才能让图片宽度为 300px ？注意下面代码不可修改。

  ````js

  <img src="1.jpg" style="width:480px!important;”>

  ````

  1.max-width: 300px
  2.transform: scale(0.625,0.625)
  3.box-sizing: border-box;padding: 0 90px;


### 5.call 和 apply 的区别是什么，哪个性能更好一些

  call比apply的性能要好，平常可以多用call, call传入参数的格式正是内部所需要的格式（原始的所有参数分开传）


### 6.浏览器缓存读取规则

  可以分成 Service Worker、Memory Cache、Disk Cache 和 Push Cache，那请求的时候 from memory cache 和 from disk cache 的依据是什么，哪些数据什么时候存放在 Memory Cache 和 Disk Cache中？

  参考：[深入理解浏览器的缓存机制](https://www.jianshu.com/p/54cc04190252)


  比如之前做过的项目的Cache-Control: no-cache, no-store, max-age=0, must-revalidate
  解析：
  1.**no-cache**：客户端缓存内容，是否使用缓存则需要经过协商缓存来验证决定
  2.**no-store**：所有内容都不会被缓存，即不使用强制缓存，也不使用协商缓存
  3.**max-age**：max-age=0 表示缓存内容将在0秒后失效
  4.**must-revalidate**：告诉浏览器、缓存服务器，本地副本过期前，可以使用本地副本；本地副本一旦过期，必须去源服务器进行有效性校验。（revalidate是重新验证的意思）

  > 所谓用户行为对浏览器缓存的影响，指的就是用户在浏览器如何操作时，会触发怎样的缓存策略。主要有 3 种：

  > **打开网页，地址栏输入地址**： 查找 disk cache 中是否有匹配。如有则使用；如没有则发送网络请求。

  > **普通刷新 (F5)**：因为 TAB 并没有关闭，因此 memory cache 是可用的，会被优先使用(如果匹配的话)。其次才是 disk cache。

  > **强制刷新 (Ctrl + F5)**：浏览器不使用缓存，因此发送的请求头部均带有 Cache-control: no-cache(为了兼容，还带了 Pragma: no-cache),服务器直接返回 200 和最新内容。
  >
  > ![区别图](https://user-gold-cdn.xitu.io/2018/9/9/165bd6dee12c01a7?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)


### 7.ES6 代码转成 ES5 代码的实现思路是什么 

  将ES6的代码转换为AST语法树，然后再将ES6 AST转为ES5 AST，再将AST转为代码


### 8.cookie 和 token 都存放在 header 中，为什么不会劫持 token？

  1、首先token不是防止XSS的，而是为了防止CSRF的；

  2、CSRF攻击的原因是浏览器会自动带上cookie，而浏览器不会自动带上token


### 9.XSS和CSRF

  CSRF（Cross-site request forgery）：跨站请求伪造。使用用户的cookie请求目标网站

  **CSRF防范方式** 

  验证码、Referer Check（请求源检查）、添加 token 验证

---------------

  XSS，即 Cross Site Script，中译是跨站脚本攻击。是指攻击者在网站上注入恶意的客户端代码，通过恶意脚本对客户端网页进行篡改，从而在用户浏览网页时，对用户浏览器进行控制或者获取用户隐私数据的一种攻击方式。

  **XSS防范方式** 

  输入检查、输出检查

  **DDos避免方式**

  1.限制单IP请求频率
  2.防火墙等防护设置禁止ICMP包
  3.检查特权端口的开放


### 10.介绍模块化发展历程

  模块化主要是用来抽离公共代码，隔离作用域，避免变量冲突等。

  **1.IIFE：** 使用自执行函数来编写模块化，特点：在一个单独的函数作用域中执行代码，避免变量冲突。
  ````js
  (function(){
    return {
    data:[]
    }
  })()

  ````

  **2.AMD：** 使用requireJS 来编写模块化，特点：依赖必须提前声明好。

  ````js
  define('./index.js',function(code){
    // code 就是index.js 返回的内容
  })
  ````

**3.CMD：** 使用seaJS 来编写模块化，特点：支持动态引入依赖文件。

````js

define(function(require, exports, module) {  
  var indexCode = require('./index.js');
});

````

**4.CommonJS：** nodejs 中自带的模块化。

````js

var fs = require('fs');

````

**5.UMD：** 兼容AMD，CommonJS 模块化语法。

**6.webpack：**webpack 2.x 版本中的代码分割。

**7.ES Modules：** ES6 引入的模块化，支持import 来引入另一个 js 。

````js

import a from 'a';

````