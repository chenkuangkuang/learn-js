### 1.TypeScript 中类型 any，void，unknown，never之间的区别

  any:任意类型，不推荐
  void：无返回值，或返回值为undefiend，通常用在函数返回
  unknown：不确定类型，通常用在接口返回
  never：永不存在的值，通常用在报错或无限循环的函数。同时never也是所有类型的子类型，它可以赋值给任何类型


### 2.HTTP协议的优缺点

  1> 简单、灵活、易于拓展
  2> 无状态
  3> 明文传输，无法验证身份和是否被修改，安全性不够

### 3.什么是正向代理？什么是反向代理？

  **正向代理**：代理客户端去请求服务器，隐藏了真实客户端
  **反向代理**：反向代理隐藏了真正的服务端。一般常用Nginx来做反向代理服务器，它的性能非常好，用来做负载均衡

### 4.什么是单工通信，半双工通信，全双工通信？

  单工通信是指只支持单向通信，比如广播，你只能听，不能发；

  半双工通信是指可以双向通信，但不能同时，比如对讲机，你发出一段话后要说一个over，然后听对方讲；

  全双工通信是指可以双向通信，且是同时双向，比如移动电话，俩人是可以在电话里吵架的。

  **websocet**就是基于tcp的全双工


### 5.缓存策略的执行顺序？

  参考 [彻底弄懂强缓存与协商缓存](https://www.jianshu.com/p/9c95db596df5)

  ![缓存策略](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9f245496e62f4d1f96f48363512267cc~tplv-k3u1fbpfcp-watermark.image)

  强缓存：配置优先读取客户端的缓存，不请求服务器
  协商缓存：请求服务器，识别tag，判断资源是否过期

  cache-control: max-age=xxxx，public
  客户端和代理服务器都缓存

  cache-control: max-age=xxxx，private
  客户端缓存，代理服务器不缓存

  cache-control: max-age=xxxx，immutable
  刷新也不请求服务器

  cache-control: no-cache
  跳过客户端强缓存，不妨碍协商缓存

  cache-control: no-store
  完全不缓存，没有强缓存和协商缓存


### 6.前端优化笔记

  参考：[性能优化的9大策略和6大指标](https://juejin.cn/post/6981673766178783262)
       [前端性能优化指南](https://segmentfault.com/a/1190000020867090)

  分发策略：

  > 1.所有静态资源走CDN
  > 2.静态资源和主页面置于不同域名下：避免请求带上cookie，避免最大连接数限制

  执行优化：

  > 1.避免重置图像尺寸：会引发图像重绘
  > 2.避免资源标签src为空：src为空时，浏览器仍会将href或src中的空内容进行加载，直至加载失败
  > 3.避免图像转换DataURL：DataURL图像没有使用图像的压缩算法，文件会变大，并且要解码后再渲染，加载慢耗时长

  渲染优化：

  > 1.设置viewport：HTML的viewport可加速页面的渲染


### 7.http和https的区别

  > 1.https比http安全，因为加密
  > 2.https默认端口443，而http是80
  > 3.https需要SSL证书，http不需要
  

### 8.fetch发送post请求为什么会发送两次？

  第一次发送的是options查询请求，是因为post改变了请求头，options请求用于询问服务器是否支持修改的请求头


### 9.关于正则的方法：match、test、repalce

  只有replace的第二个参数可以是回调函数

  字符串支持的方法：str.replace, str.match

  正则对象支持的方法：reg.test


### 10.缓存关键字的理解

  no-store (Cache-Control: no-store) 完全不缓存，客户端和服务器都不缓存

  no-cache (Cache-Control: no-cache) 跳过设置强缓存，但不妨碍协商缓存

    > 协商缓存：即请求服务器时，查询资源是否过期

  Expires： 属于http1.0的老的缓存时间定义，http1.1多用max-age

    > Expires定义的是绝对时间，max-age是相对时间（比如多少秒之后过期）

  Cache-Control  服务器返回头（response header），用于标识该资源的缓存过期时间等

    > max-age 缓存时间  
    > public  可以被浏览器和代理服务器缓存，private，只能被浏览器缓存
    > immutable 该资源永远不会变（刷新的时候不要请求服务器）(immutable本身是不可变的意思)

    cache-control 表示强缓存，每次打开页面都查询缓存

  Last-Modified （返回头） 资源最后修改时间

    如果带有Last-Modified，下次请求会带上If-modified-since 的 HttpHeader 

  If-Modified-Since （请求头） 客户端缓存的最后修改时间

    Last-Modified,Etag,Expires 三个同时使用时。先判断 Expire ，然后发送 Http 请求，服务器先判断 last-modified ，再判断 Etag ，必须都没有过期，才能返回 304 响应

  Etag （请求头）资源在服务器的唯一标识符



