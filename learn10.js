// 观察者模式

class MyClass{
  constructor() {
    
  }

  observer() {
    
  }
}


return;

// 观察者模式和发布订阅模式的区别：
// 发布订阅模式是观察者模式的升级，写法上，发布订阅模式区分了事件名称和类型

// 发布订阅模式
// 手动触发自定义事件：emit

class MyClass {
  subscribeFuncArr = {}

  constructor() {
    
  }

  // 发布
  publish(eventType) {
    if (!this.subscribeFuncArr[eventType]) {
      return;
    }
    this.subscribeFuncArr[eventType].map(func => func());
  }

  // 订阅
  subscribe(eventType, func) {
    if (!this.subscribeFuncArr[eventType]) {
      this.subscribeFuncArr[eventType] = [];
    }
    this.subscribeFuncArr[eventType].push(func)
  }

}

const newClass = new MyClass();
newClass.subscribe('click', function () {
  console.log('订阅click',);
})

setTimeout(() => {
  newClass.publish('click');
}, 1000);