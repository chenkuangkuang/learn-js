### 1.js中存储数组、字符串等数据的异同

  1.内存分为两块区域：栈和堆

  2.js数据按构造分为两种：简单类型和复杂类型

  3.简单类型直接存在栈里

  4.对象类型，值存在堆中，名称存在栈中（对象名称即找到这个对象的地址）


### 2.script 标签中defer和async属性的区别

  1.没有任何属性

  > <script src="example.js"></script>

  立即加载并执行脚本，会阻塞后续文档的加载

  2.增加async属性：不影响后续文档的加载

  > <script async src="example.js"></script>

  后续文档的加载和渲染与js脚本的加载和执行是并行进行的，即异步执行

  3.增加defer属性：不影响后续文档的加载，脚本执行要等到所有元素解析完成

  > <script defer src="example.js"></script>

  加载后续文档的过程和js脚本的加载(此时仅加载不执行)是并行进行的(异步)，js脚本的执行需要等到文档所有元素解析完成之后，DOMContentLoaded事件触发执行之前。


### 3.浏览器缓存了解吗？强缓存一般存放在哪里？计算整个文件得到 etag 会耗费性能，怎么解决？如果我不想要使用缓存了，每次都请求最新的，怎么做？no-store 和 no-cache 的区别是什么？

  强制缓存阶段：先在本地查找该资源，如果有发现该资源，而且该资源还没有过期，就使用这一个资源，完全不会发送 http 请求到服务器。

  协商缓存阶段：如果在本地缓存找到对应的资源，但是不知道该资源是否过期或者已经过期，则发一个 http 请求到服务器,然后服务器判断这个请求，如果请求的资源在服务器上没有改动过，则返回 304，让浏览器使用本地找到的那个资源。

  启发式缓存阶段：当缓存过期时间的字段一个都没有的时候，浏览器下次并不会直接进入协商阶段，而是先进入启发式缓存阶段，它根据响应头中 2 个时间字段 Date 和 Last-Modified 之间的时间差值，取其值的 10%作为缓存时间周期。也就是说，当存有 Last-Modified 字段的时候，即使是断网，且强缓存都失效后，也有一定时间是直接读取缓存文件的。etag 是没有这个阶段的。

  缓存失败阶段：当服务器发现请求的资源已经修改过，或者这是一个新的请求(再本来没有找到资源)，服务器则返回该资源的数据，并且返回 200， 当然这个是指找到资源的情况下，如果服务器上没有这个资源，则返回 404。

#### 4.no-stroe & no-cache

    no-store 禁止浏览器和中间服务器缓存。每次都从服务器获取。

    注意，no-store 才是真正的完完全全的禁止本地缓存。

    no-cache 每次请求都会验证该缓存是否过期。可以在本地缓存，可以在代理服务器缓存，但是这个缓存要服务器验证才可以使用

    注意，no-cache 不是不缓存的意思。


### 5.meta标签作用

  1.声明文档的字符编码

    <meta charset='utf-8' /> 

  2.声明使用的浏览器和版本

    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" /> 

    >  X-UA-Compatible 针对ie8声明兼容模式

  3.SEO优化相关

    <meta name="keywords" content="html5, css3, 关键字"/>  

  4.页面重定向和刷新：content内的数字代表时间（秒），既多少时间后刷新。如果加url,则会重定向到指定网页。

    <meta http-equiv="Refresh"  contect="5;url=http://www.helloweba.com" /> 

  5.Expires网页过期时间

    <meta http-equiv="Expires" contect="Mon,12 May 2016 00:20:00 GMT" /> 

  6.Pragma禁止本地缓存

    <meta http-equiv="Pragma" contect="no-cache" /> 

   > 设定网页不保存在缓存中，每次访问都刷新页面。这样设定，访问者将无法脱机浏览。 
  
  7.viewport移动设备屏幕可视区域

    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /> 

    > initial-scale – 初始的缩放比例 （范围从 > 0 到 10）

      minimum-scale – 允许用户缩放到的最小比例

      maximum-scale – 允许用户缩放到的最大比例

      user-scalable – 用户是否可以手动缩放 (no，yes)

  8.启用360浏览器的极速模式(webkit)

    <meta name=”renderer” content=”webkit”>

### 5.什么是 Cookie 隔离？（或者说：请求资源的时候不要让它带 cookie 怎么做）

  网站向服务器请求的时候，会自动带上cookie这样增加表头信息量，使请求变慢。

  如果静态文件都放在主域名下，那静态文件请求的时候都带有的cookie的数据提交给server的，非常浪费流量，所以不如隔离开，*静态资源放CDN*。

  因为cookie有域的限制，因此不能跨域提交请求，故*使用非主要域名*的时候，请求头中就不会带有cookie数据，这样可以降低请求头的大小，降低请求时间，从而达到降低整体请求延时的目的。

  同时这种方式不会将cookie传入WebServer，也减少了WebServer对cookie的处理分析环节，提高了webserver的http请求的解析速度。


### 6.min-width/max-width 和 min-height/max-height 属性间的覆盖规则？

  （1）max-width会覆盖width，即使width是行类样式或者设置了!important。

  （2）min-width会覆盖max-width，此规则发生在min-width和max-width冲突的时候。

### 7.什么是幽灵空白节点？

  “幽灵空白节点”是内联盒模型中非常重要的一个概念，具体指的是：在HTML5文档声明中，内联元素的所有解析和渲染表现就如同每个行框盒子的前面有一个“空白节点”一样。这个“空白节点”永远透明，不占据任何宽度，看不见也无法通过脚本获取，就好像幽灵一样，但又确确实实地存在，表现如同文本节点一样，因此，我称之为“幽灵空白节点”。


### 8.margin:auto的生效前提


  widht或height为auto时，元素是具有对应方向的自动填充特性的

  1.如果一侧是定值，一侧auto，则auto为剩余空间大小
  2.如果两侧都是auto，则平分剩余空间


### 9.margin无效的情形

（1）display计算值inline的非替换元素的垂直margin是无效的。对于内联替换元素，垂直margin有效，并且没有ma
rgin合并的问题。

（2）表格中的<tr>和<td>元素或者设置display计算值是table-cell或table-row的元素的margin都是无效的。

（3）绝对定位元素非定位方位的margin值“无效”。

（4）定高容器的子元素的margin-bottom或者宽度定死的子元素的margin-right的定位“失效”。


### 10.border 的特殊性

  （1）border-width却不支持百分比。

  （2）border-style的默认值是none，有一部分人可能会误以为是solid。这也是单纯设置border-width或border-col
or没有边框显示的原因。

  （3）border-style:double的表现规则：双线宽度永远相等，中间间隔±1。

  （4）border-color默认颜色就是color色值。


