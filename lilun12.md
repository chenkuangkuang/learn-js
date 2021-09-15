### 1.css常见布局，比如上下固定，中间占满

 - header,center,bottom都使用absolute，center的top和bottom设置100px，拉长，宽设置100%，拉宽
 - flex布局
 - grid布局
 - table布局
 参考：https://www.jianshu.com/p/30bc9751e3e8

### 2.ES6的proxy和ES5的defineProperty区别

-  defineProperty 只能重定义属性的读取（get）和设置（set）行为，到了 ES6，提供了 Proxy，可以重定义更多的行为，比如 in、delete、函数调用等多达13种操作
- defineProperty直接让目标对象生效，proxy只能让实例生效
- proxy可能有浏览器兼容问题

### 3.vue3和vue2的区别

https://www.jianshu.com/p/9088d530aecc

 - 1.程序入口
   2.0: new Vue({}).$mount('#app');
   3.0: createApp(App).mount('#app');

 - 2.setup 组合式api
   处于 生命周期函数 beforeCreate 和 Created 两个钩子函数之间
   组件被创建之前，props 被解析之后
   无法 使用 data 和 methods 中的数据和方法的，this为undefined
   定义的变量和方法要return出去
   只能同步，无法异步

 - 3.Teleport (相比react的Portal)
   可以在任意html节点渲染组件：<teleport to="body">包裹子组件

 - 4.片段 （也就是react中的return 数组，根节点不必是单个html）

 - 5.script setup （单文件使用setup）
   在script上使用setup，内部声明的变量、函数都能在模板中直接使用
   import 导入的内容同理
   <script setup> 
   console.log('hello script setup')
   </script>

 - 6.状态驱动的动态 CSS
   style标签中的css属性值使用v-bind，关联到组件状态上

    <template>
    <div class="text">hello</div>
    </template>

    <script>
    export default {
    data() {
        return {
        color: 'red'
        }
    }
    }
    </script>

    <style>
    .text {
        color: v-bind(color);
    }
    </style>
   


 参考：https://www.jianshu.com/p/9088d530aecc

### 4.koa的ctx是什么

https://www.cnblogs.com/zhuangbowu/p/14607108.html

### 5.ref在vue和react中的使用和区别

 - 一般都是用于绑定html元素或自定义组件

 - vue的简单使用：
 ````javascript
 
 <input ref="input">

 focus: function(){
     this.$ref.input.focus();
 }
 
 ````

 - vue的ref可以声明作为值的响应式引用

 ````javascript

 setup(){
     // 声明
     const abc = ref([]);
     // 使用
     abc.value = xxx;
 }

 ````

 和reactive的区别：
 1.ref直接访问是个对象，reactive是个值
 2.推荐写法，ref绑定简单类型，reactive绑定复杂类型


 ### 6.vue的生命周期
  - beforeCreate 实例初始化之后
  - created  实例已创建，数据观测、属性和方法等完成配置，el还未挂载
  - beforeMount el和data已初始化，render首次调用，还未挂载到html上
  - mounted 挂载完成，可以做ajax操作
  - beforeUpdate 数据更新和重新渲染前，可以进一步更改状态
  - updated dom已更新，可以执行依赖dom的操作，避免修改状态 
  - beforeDestroy 实例仍然可用，一般做清除定时器和监听的重置的工作
  - destroyed 调用后 事件监听被移除，子实例被销毁（服务端渲染不会调用）


### 7.react中ref的3种绑定方式

 - 1.string类型绑定 (老版本的写法，已不推荐)
   <input ref="inputRef" />
   this.refs.inputRef.focus();

 - 2.react.CreateRef()  用于class组件
   inputRef = React.createRef();
   this.inputRef.current.focus();
   <input ref={this.inputRef} />

 - 3.函数形式
   inputRef = null;
   this.inputRef.focus();
   <input ref={(el)=>this.inputRef = el} />
   可以通过函数方法把子组件整个暴露给父组件，用于父组件调用子组件方法
   <SonCom bindRef={this.getSonRef}>
   子组件中：
   props.bindRef(this) // 传入this
   父组件中：
   getSonRef = el =>this.sonRef = el;
   this.sonRef.focus();

 - 4.useRef 在hook中
   const inputRef = useRef(null);
   inputRef.current.focus();
   <input ref={inputRef}>

# 8.重学flex布局
 - 容器属性
   flex-direction 主轴方向
   flex-wrap 是否换行
   flex-flow flex-direction和 flex-wrap的合并写法
   justify-content 主轴对齐方式
   align-items 交叉轴对齐方式
   align-content  多根轴线的对齐方式

 - 子项目属性
   order 项目的排列顺序，值越小越靠前，默认0
   flex-grow 放大比例，默认0；如果一个是2其他是1，则有剩余空间时占2倍空间
   flex-shrink 缩小比例，默认0
   flex-basis 基础空间，即没有剩余空间时的空间占用，默认auto即本来大小
   flex 是flex-grow、flex-shrink、flex-basis的简写，默认0 1 auto
   align-self 项目单独的对齐方式，默认auto，其他值跟align-item一致

 - flex:1 代表什么
   flex为一个非负数组，则该数字是flex-grow的值（放大比例）
   flex: n = flex-grow: n; flex-shrink: 1; flex-basis: 0%;

   参考：https://www.cnblogs.com/LangZ-/p/12703858.html
   

### 9.什么是js的依赖注入

 - 简单例子
   ````javascript

   import ElementUI from 'element-ui'; // 初始化被依赖的模块

   Vue.use(ElementUI) // 注入到依赖模块中
 
   ````

 - 参考：https://blog.csdn.net/nongshuqiner/article/details/78792174

