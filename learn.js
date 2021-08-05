async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}

async function async2() {
  console.log('async2')
}

console.log('script start');

setTimeout(() => {
  console.log('settimeout');
}, 0);

async1();

new Promise(function (resolve) {
  console.log('promise1');
  resolve();
}).then(function () {
  console.log('promise2')
})

console.log('script end')

/* 

主线程（宏任务）：

1.script start
2.async1 start
3.async2
4.promise1
5.script end

微任务：

6.async1 end
7.promise2

第二轮宏任务：

8.setTimeout

*/