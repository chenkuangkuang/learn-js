console.log('script start');

setTimeout(function() {
  console.log('setTimeout');
}, 0);

new Promise((resolve) => {
    console.log('Promise')
    resolve()
}).then(function() {
  console.log('promise1');
}).then(function() {
  console.log('promise2');
});

console.log('script end');

/* 
主线程（宏任务）：
1.script start
2.Promise
3.script end

微任务：
4.promise1

-------------
第二轮：

宏任务：
5.setTimeout

*/