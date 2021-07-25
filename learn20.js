// 以下代码会输出什么？

class Example extends React.Component {
  constructor() {
    super();
    this.state = {
      val: 0
    };
  }
  
  componentDidMount() {
    // isBatchingUpdates 是否批量更新。但是在生命周期中isBatchingUpdates=false，却是批量更新的
    this.setState({val: this.state.val + 1});
    console.log(this.state.val);    // 第 1 次 log：0 （异步执行，然而 isBatchingUpdates = false）

    this.setState({val: this.state.val + 1});
    console.log(this.state.val);    // 第 2 次 log：0（异步执行， 然而 isBatchingUpdates = false）

    setTimeout(() => {
      console.log(this.state.val);  // 第 3 次 log：1 之前的两次被合并了，实际只加1
      this.setState({val: this.state.val + 1});
      console.log(this.state.val);  // 第 4 次 log：2 （同步执行， isBatchingUpdates = false）

      this.setState({val: this.state.val + 1});
      console.log(this.state.val);  // 第 5 次 log：3 （同步执行， isBatchingUpdates = false）
    }, 0);
  }

  render() {
    return null;
  }
};


/* 

setState什么时候异步，什么时候同步？

异步setState: 由React控制的事件处理程序，以及生命周期函数调用setState不会同步更新state 

同步setState：React控制之外的事件中调用setState是同步更新的。比如原生js绑定的事件，setTimeout/setInterval等

*/
