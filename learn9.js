// 手写promise

function myPromise(func) {

  // 这个this指向 new的实例，所以在下面声明status和res时需要使用this.xxx定义
  var _this = this;
  // 注意 此处直接写status 和 this.status的区别
  this.status = 'pending';
  this.res = undefined;
  // 发布订阅模式，在then函数中增加订阅，在resolve和reject时发布
  this.successFuncArr = [];
  this.failFuncArr = [];

  function resolve(res) {
    if (_this.status == 'pending') {
      _this.status = 'success';
      _this.res = res;
      _this.successFuncArr.map(i => i(_this.res));
    }
  }

  function reject() {
    if (_this.status == 'pending') {
      _this.status = 'failed';
      _this.res = 'error';
      _this.failFuncArr.map(i => i(_this.res));
    }
  }
  try {
    func(resolve, reject);
  } catch (error) {
    reject(error);
  }

  // then函数的逻辑：注册监听事件，当事件变化时，触发事件池的所有事件
  this.then = function (successFunc, failFunc) {
    console.log('=进入then', _this.status);
    this.successFuncArr.push(successFunc);
    this.failFuncArr.push(failFunc);
    return successFunc;

    // 如果 successFunc 返回的是一个promise，那么下次调用then，即进入返回的promise的then
  }

  return this;
}

const sleep = (callback) => {
  setTimeout(() => {
    const res = '请求结果';
    console.log('=异步返回请求结果=');
    callback && callback(res);
  }, 1000);
}

var p1 = new myPromise(function (resolve, reject) {
  sleep(function (res) {
    if (res) {
      resolve(res)
    } else {
      reject('失败');
    }
  });
});

console.log('=p1=', p1);

p1.then(res => {
  console.log('then=res=', res);
})