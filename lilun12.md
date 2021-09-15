### 1.css常见布局，比如上下固定，中间占满

### 2.flex:1的含义及对应的三个属性值

### 3.vue3和vue2的区别

https://www.jianshu.com/p/9088d530aecc

 - 1.程序入口
   2.0: new Vue({}).$mount('#app');
   3.0: createApp(App).mount('#app');

 - 2.setup 组合式api
   处于 生命周期函数 beforeCreate 和 Created 两个钩子函数之间
   无法 使用 data 和 methods 中的数据和方法的，this为undefined
   定义的变量和方法要return出去
   只能同步，无法异步

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

