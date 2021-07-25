class A {
  // 这样写，count is 1，因为使用了箭头函数绑定了this
  // constructor() {
  //     this.hander = ()=>{
  //         // 这里的this指向A（的实例？）
  //         this.count += 1;
  //         return this.count;
  //     }
  // }
  count = 0;
  // 这样写，count is  101
  hander() {
    this.count += 1;
    return this.count; 
  };
}

class Test {
  count = 100;
  h;
}

class Program {
  static Main() {
    let t = new Test(); // t.count = 100
    let a = new A(); // a.count = 0
    t.h = a.hander; // 
    t.count = t.h();
    console.log(`count is :${t.count}`);
  }
}

Program.Main();