### 1.js架构模式（MVC、MVP到MVVM）的发展和理解

参考：http://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html

 - MVC （Model 模型 - View 视图  - Controller 控制器）

   其中model用于封装与处理数据，Controller用于连接V和M，控制流程

   实现MVC：https://www.cnblogs.com/front-end-ralph/p/5190442.html

 - MVP （Model 模型 - View 视图 - Presenter 呈现）

   关键点在于Presenter隔离M和V，P充当桥梁

 - MVVM （Model 模型 - View 视图 - ViewModel ）

   MVVM的特色是双向绑定，view的变动，自动反映到ViewModel，反之亦然
   主要解决了MVC中大量的DOM操作使页面渲染性能降低的问题

 - react和vue是什么架构
   react只是简单的v。公式理解：ui = render(data)，顶多就是model->view，搭配各种插件和状态管理工具后，可类似于MVC
   vue借鉴了MVVM，但也不是标准的MVVM

### 2.float的深入理解

https://blog.csdn.net/LavanSum/article/details/81317423

 - 浮动脱离文档流，碰到父元素边框或其他浮动元素边框会停止浮动
 - float浮动会生成一个块级框，不论本身是何种元素
 - 非替换元素需要指定宽度，否则宽度不正常（很窄）
 - clear属性规定元素的哪一侧不允许出现浮动元素（行内元素如span无效）

 -浮动会产生的问题：
  1.父元素高度塌陷
  2.如果都是行内元素，同级元素会跟随其后；若非第一个元素浮动，之前的元素也会跟随其后；
  3.如果都是块级元素，同级元素前面的不受影响，后面的元素会挤到浮动元素的位置（浮动元素在上方覆盖），但内容会被挤到再后面的元素中


### 3.BFC的深入理解

### 4.this的深入理解

 - 见learn91.js

### 5.原型链的深入理解（一句话）

在调取一个对象的属性时，会先在对象本身查找，如果没有，就根据proto找到构造函数的原型，如果依然无此属性，继续往上找，直到到达顶层Object.prototype，他的proto指向null，如果没有结果就返回null。

**由proto串起来的路径就是原型链**

 - proto是对象的属性，prototype是函数独有属性（函数的原型对象）（函数本身也是对象的一种，所以也有proto）

 - Object是构造函数，同样的Array，String，Boolean，Date，RegExp也都是构造函数

 - typeof Object == 'function'

 - Object.prototype.__proto===null

### 6.css的弹性布局及其他常见布局

弹性布局即flex布局，还有grid布局

https://www.cnblogs.com/juetan/p/13210400.html

 - 单列布局
 - 两列自适应布局
   float + (overflow:hidden / margin)
 - 圣杯布局和双飞翼布局
   3个float:left，中间宽度100%，左右两边使用relative的left和right负值挤到一行，父元素再padding
 - 伪等高布局，见learn23.html - learn26.html
   1.flex布局下设置flex:1，交叉轴上的伸缩默认拉伸为父元素高度 （默认水平为主轴，则高度就是交叉轴，交叉轴拉伸为父元素高度）
   2.float+margin-bottom极小负值和padding-bottom的极大正值
   3.三个absolute，配合top:0,bottom:0撑开
   4.table布局
   5.边框模拟：left和right的空间都由center的border-left和border-right撑开
 - 粘连布局
   footer在内容短时置底，内容长时跟随内容靠底，见learn22.html 

 参考：https://blog.csdn.net/VhWfR2u02Q/article/details/84076421

### 7.diff算法的深入理解

diff算法的本质是找出两个对象的差异，尽可能复用节点，减少dom操作

### 8.实现vue的双向绑定

参考：https://segmentfault.com/a/1190000039750996


### 9.global对象和window对象的区别

 - global是个抽象概念，由ECMAScript定义，指代取决于程序在发么环境中运行，一切全局里存在的变量和函数都是它的属性和方法

 - window对象就是浏览器环境中的global


### 10.前端规范的大分类

 - 命名：文件命名、js变量命名、js函数命名、css的class命名，主要是大小写，语义化
 - 注释编写规范
 - 书写排版规范，比如缩进、空格、css属性顺序
 - 代码性能规范，比如js中for循环缓存length、css中合并多个属性、html减少标签数量等
 - 










