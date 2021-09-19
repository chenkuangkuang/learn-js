### 1.http2 的多路复用

  HTTP2采用二进制格式传输，取代了HTTP1.x的文本格式，二进制格式解析更高效。
  多路复用代替了HTTP1.x的序列和阻塞机制，所有的相同域名请求都通过同一个TCP连接并发完成。在HTTP1.x中，并发多个请求需要多个TCP连接，浏览器为了控制资源会有6-8个TCP连接都限制。
  HTTP2中

  - 同域名下所有通信都在单个连接上完成，消除了因多个 TCP 连接而带来的延时和内存消耗。
  - 单个连接上可以并行交错的请求和响应，之间互不干扰


### 2.谈谈你对 TCP 三次握手和四次挥手的理解

  三次握手：

  > A：你好，我是A（证明A有发送能力）
  > B: 收到，我是B （证明B有接收和发送能力）
  > A: 好的，开始连接 （证明A有接收能力）

  四次挥手：

  > A：你好，我要关闭了 （A没有数据传递了，关闭发送，但还可以接收）
  > B：稍等，还有最后一个包 （B配合A关闭接收，但还可以发送）
  > B：我已经好了，随时关闭 （B没有数据传递了，关闭发送）
  > A：你关闭吧，不用回复 （A关闭接收）


  TCP三次握手：1、客户端发送syn包到服务器，等待服务器确认接收。2、服务器确认接收syn包并确认客户的syn，并发送回来一个syn+ack的包给客户端。3、客户端确认接收服务器的syn+ack包，并向服务器发送确认包ack，二者相互建立联系后，完成tcp三次握手。四次握手就是中间多了一层 等待服务器再一次响应回复相关数据的过程

  三次握手之所以是三次是保证client和server均让对方知道自己的接收和发送能力没问题而保证的最小次数。

  第一次client => server 只能server判断出client具备发送能力
  第二次 server => client client就可以判断出server具备发送和接受能力。此时client还需让server知道自己接收能力没问题于是就有了第三次
  第三次 client => server 双方均保证了自己的接收和发送能力没有问题

  其中，为了保证后续的握手是为了应答上一个握手，每次握手都会带一个标识 seq，后续的ACK都会对这个seq进行加一来进行确认。

  [谈谈你对 TCP 三次握手和四次挥手的理解](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/15)


### 3.JS 异步解决方案的发展历程以及优缺点。

  1.回调函数（callback）

  缺点：回调地狱，不能用 try catch 捕获错误，不能 return

  2.Promise

  三个状态：pending（悬而未决）、fulfilled（完成），rejected（拒绝）

  缺点：无法取消 Promise ，错误需要通过回调函数来捕获

  3.Generator

  4.Async/await

  缺点：await 将异步代码改造成同步代码，如果多个异步操作没有依赖性而使用 await 会导致性能上的降低。

### 4.async，await 如何通过 同步方式的写法，达到的异步的效果

  自执行的generator函数


### 5.react hook 的使用注意事项

 1.不要在循环、条件或嵌套函数中使用，必须始终在react函数的顶层使用

 2.使用useState时，注意数组方法push、pop、splice等直接更改数据的坑

 3.如果使用useState初始化的参数是传入的props，只有第一次有效，后期props变化时，必须通过useEffect

 ````js

 const TableDeail = ({
    columns,
  }:TableData) => {
      const [tabColumn, setTabColumn] = useState(columns) 
  }

  // 正确的做法是通过useEffect改变这个值
  const TableDeail = ({
      columns,
  }:TableData) => {
      const [tabColumn, setTabColumn] = useState(columns) 
      useEffect(() =>{setTabColumn(columns)},[columns])
  }

 ````

 4.


### 6.react-fiber

  Fiber实现了自己的组件调用栈，它以链表的形式遍历组件树，可以灵活的暂停、继续和丢弃执行的任务。实现方式是使用了浏览器的requestIdleCallback这一 API。

  Fiber 其实指的是一种数据结构，它可以用一个纯 JS 对象来表示：

  const fiber = {
      stateNode,    // 节点实例
      child,        // 子节点
      sibling,      // 兄弟节点
      return,       // 父节点
  }

### 7.react事件原理

  React并不是将click事件绑在该div的真实DOM上，而是在document处监听所有支持的事件，当事件发生并冒泡至document处时，React将事件内容封装并交由真正的处理函数运行。这样的方式不仅减少了内存消耗，还能在组件挂载销毁时统一订阅和移除事件。

  另外冒泡到 document 上的事件也不是原生浏览器事件，而是 React 自己实现的合成事件（SyntheticEvent）。因此我们如果不想要事件冒泡的话，调用 event.stopPropagation 是无效的，而应该调用 event.preventDefault。


### 8.伪类和伪元素的区别

  伪类是dom特殊的状态，比如focus、hover、visited等

  伪元素是dom未定义的虚拟元素

### 9.有哪些前端安全问题

  1.XSS攻击：页面被注入恶意代码（比如通过输入框输入提交到服务器，再请求到页面执行）

  2.CSRF跨站请求，在第三方网站对目标网站发送跨站请求，通过已获取的凭证，达到冒充用户对目标网站进行某些操作

  3.内容验证，比如js文件上传执行

  4.第三方依赖包

### 10.CDN的作用和原理

  作用是加速资源的请求

  原理是在请求cdn资源时，先请求dns服务器，分配到就近的CDN节点，获取目标资源
