### 1.VNode和虚拟DOM的区别

  VNode指的是虚拟节点，而虚拟DOM指的是整个VNode树

### 2.v-if和v-show的区别

  v-if是真正的条件渲染，只有为true才会渲染到dom中
  v-show则只是切换元素的display属性，元素始终会被渲染
  
  使用场景：v-if有较大的切换开销，v-show有较大的初始渲染开销；频繁切换时用v-show，否则用v-if