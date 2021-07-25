### 1.css优化技巧

​	参考：https://juejin.cn/post/6844903649605320711?utm_source=gold_browser_extension%3Futm_source%3Dgold_browser_extension#heading-0

​	**实践型技巧**

1. 内联首屏关键CSS

2. 异步加载CSS （rel="preload" ）

   > <link rel="preload" href="mystyles.css" as="style" onload="this.rel='stylesheet'">

3. 文件压缩

4. 去除无用的css

   

   **建议型技巧**

   

1. 使用合适的选择器

6. 减少使用耗费性能的属性：box-shadow/border-radius/filter/opacity/:nth-child

7. 优化重排和重绘

8. 不使用@import



### 2.重排和重绘的区别

​	重排：布局、尺寸、大小的改变

​	重绘：颜色、背景、可见性的改变



### 3.HTTP报文

​	发送报文由四个部分构成：

	1. 请求行：请求方法、请求地址、协议版本
	2. 请求头部：附加信息host、user-agent、accept等
	3. 空行：位于请求头部末尾，标识结束，必不可少
	4. 请求数据：get没有请求数据

​	返回报文由三部分组成：

	1. 状态行：协议版本，状态码，状态码描述
	2. 响应头部：附加信息，如content-type等
	3. 响应数据


### 4.http缓存相关参数

	Expires：资源过期时间

	Cache-control：资源设置的缓存时间

			cache-control：no-cache 浏览器会缓存资源，每次都会向服务器询问是否过期

			cache-control：no-store 绝对禁止缓存资源

			cache-control：public 允许CDN缓存

			cache-control：privite 禁止CDN缓存

	Pragma：兼容性参数，和 Cache-control：no-cache相同

	Last-modified：资源上一次的修改时间

	If-Modified-Since: 客户端保留的资源上次的修改时间

	Etag：资源唯一标识

	If-None-Match: 客户端保留的资源标识


  **浏览器强制刷新/禁用资源缓存**

	请求头部配置cache-control: no-cache 或者 Pragma: no-cache

  **如何设置浏览器的强缓存**

	在资源响应头部配置以下任一属性:
	1）Expires: Mon, 10 Aug 2040 06:26:14 GMT （Expires在http1.0有效）
	2）Cache-Control: max-age=604800  （max-age针对http1.1有效，单位：秒）
	

### 5.gis坐标系统

	1.地理坐标系统
		以经纬度为单位

  **WGS-84** 即 **EPSG4326**  地球坐标（原始坐标系）：国际经纬度坐标标准

  **GCJ-02**  火星坐标：在真实经纬度上加密后的坐标：谷歌、高德使用

  **BD-09**   百度坐标：在火星坐标基础上偏移得到的百度专用坐标

  **EPSG3857**  web墨卡托投影坐标：即 WGS-84 的墨卡托投影

	2.投影坐标系统
		以km等长度、面积为单位


### 6.如何实现一个上中下三行布局，顶部和底部最小高度是 100px

	````css
	
	.div{
/* 常规的CSS省略 */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 200px;

    /* 让省略符显示在文本左侧 */
    direction: rtl;
    text-align: left;
	}

	````

### 7.如何处理浏览器中表单项的密码自动填充问题

	将input设置为readonly，然后再focus时取消此属性


### 8.hash路由和history路由的优缺点比较

	hash路由：
	  优点：使用方便，无需后端配置，兼容性好
		缺点：#符号不规范不美观

	histroy路由：
		优点：美观
		缺点：手动输入触发请求；兼容性差

### 9.JavaScript 中对象的属性描述符有哪些？分别有什么作用？

	value 当前值
	writable 可写可赋值
	configurable 属性操作符可被改变
	enumerable 可被枚举


### 10.Object.defineProperty 有哪几个参数

	````javascript

		Object.defineProperty(user, "name", {
			value: "测试名称",
			writable: true,
			enumerable:true,
      configurable:true
		})

		// 或者使用get set 方法

	````

	与proxy区别：

	````javascript

		let proxy = new Proxy({}, {
			get(obj, prop) {
					return obj[prop]
			},
			set(obj, prop, val) {
					obj[prop] = val
			}
		})

	````

	当使用 defineProperty 时，我们修改原来的 obj 对象就可以触发拦截
	而使用 proxy，就必须修改代理对象，即 Proxy 的实例才可以触发拦截



