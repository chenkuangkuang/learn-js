// 节流函数：控制函数在若干秒只执行一次


let lastDo = false;

// 时间戳写法，第一次立即执行
function throttle(func, time) {
  let lastDo = 0;
  return function () {
    const now = Date.now();
    if (!lastDo) {
      lastDo = Date.now();
    }
    // 上次执行距离此刻，已经操作规定的时间，可以再执行
    if (Date.now() - lastDo > time) {
      //arguments 是 return的这个function传入的参数
      // apply 第二个参数是一个整体的参数数组
      func.apply(this, arguments);
      lastDo = now;
    }
  }
}

// 防抖：控制函数在任意次触发的最后一次触发的N秒后执行，如输入框输入文字触发搜索