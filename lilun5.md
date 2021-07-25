### 1.null和undefined的差别

  相同点：在if判断中都是false
  不同点：1.null转换数字类型0，undefiend转换数字类型NaN
         2.typeof null => 'object'，typeof undefined => 'undefined'
         3.设置为null的变量会被内存收集器回收


### 2.浏览器控制逻辑

  1.查询本地是否有缓存
    2.没有缓存，直接请求服务器
    3.有缓存，查询缓存是否过期（expire：资源的过期时间）
      4.没有过期，读取缓存
      5.已过期，请求服务器（Etag：资源标记，找对应资源），查询是否有更新（Last-Modified：资源的最后修改时间）
        6.没有更新，继续读取缓存
        7.已过期，返回最新的数据或资源


### 3.如何触发BFC

  1.overflow不为visible（默认值）
  2.float不为none
  3.position为absolute或fixed
  4.display: inline-block / table
  5.根元素


### 4.从输入url到渲染页面的全过程

  1.DNS解析：输入url，浏览器会查询缓存（浏览器缓存、操作系统缓存、路由器缓存等）或从本地hosts文件或DNS服务器获取真实的ip地址
  2.TCP（HTTP/HTTPS）连接：和网站真实地址建立连接
  3.发送HTTP请求，服务器处理请求并返回HTTP报文：发送请求，并声明相应类型，服务器返回网页文件
  3.浏览器读取并解析html页面，顺序执行下载css、js或图片等，区分异步或同步
  4.渲染页面


### 5.redux中间件的执行位置

  redux中间件middleware，是在actions之后，reducer之前执行


### 6.请求状态码304是什么

  304是查询服务器得知缓存未过期，提示浏览器直接使用缓存即可（减少服务器查询时间，以及数据返回时间）

    第一次访问 200
    按F5刷新（第二次访问） 304 （F5刷新：请求头中包含了一个Pragma: no-cache）
    按Ctrl+F5强制刷新 200 （强制刷新：浏览器会省略If-Modified-Since和If-None-Match请求头）


### 7.说一说贵公司开展项目的工作流程

  1.项目立项，厘清基本需求，技术难点
  2.技术选型
  3.项目基本框架搭建
  4.原型确认，设计稿确认
  5.开发任务分配，代码编写
  6.前后端联调
  7.开发自测后，交付测试
  8.bug处理，细节完善，性能优化


### 8.canvas常用api

  1.fillRect(x,y,width,height)实心矩形
	2.strokeRect(x,y,width,height)空心矩形
	3.fillText("Hello world",200,200);实心文字
  4.strokeText("Hello world",200,300)空心文字


### 9.各种获取元素宽和高的方式及区别

  1.dom.style.width/height 只能获取内联样式设置的宽和高
  2.dom.currentStyle.width/height IE专用的获取计算宽高
  3.window.getComputedStyle(dom).width/height 多种浏览器通用的计算宽和高
  4.dom.getBoundingClientRect().width/height 根据元素在视窗中的绝对位置来获取宽高的（getBoundingClientRect返回对象集合，包含多种x、y、width、height、top、right等元素相对视窗的信息）
  5.dom.offsetWidth/offsetHeight  最常用的，也是兼容最好的


### 10.各种获取屏幕、可见区域宽和高的方式及区别

  1.window.screen.width/height  获取屏幕的高度和宽度（屏幕分辨率） 本机测试：1920 1080
  2.window.screen.availWidth/availHeight 获取屏幕工作区域的高度和宽度（去掉状态栏） 1920 1050
  3.document.body.scrollWidth/scrollHeight 网页全文的高度和宽度
  4.document.body.scrollTop/scrollLeft 滚动条卷上去的高度和向右卷的宽度
  5.document.body.clientHeight/clientWidth 网页可见区域的高度和宽度（不加边线） 45074 1730

#####   6.document.body.offsetHeight/offsetWidth 网页可见区域的高度和宽度（加边线，即元素内容溢出后滚动条的部分） 45074 1730

  参考：https://blog.csdn.net/weixin_34221112/article/details/94020420



![img](https://images2018.cnblogs.com/blog/998959/201809/998959-20180902162919860-911974912.png)

