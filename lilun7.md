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