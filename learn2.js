console.log('start');
setTimeout(() => {
  console.log('children2');
  Promise.resolve().then(() => {
    console.log('children3');
  })
}, 0);

new Promise(function (resolve, reject) {
  console.log('children4');
  setTimeout(function() {
    console.log('children5');
    resolve('children6');
  }, 0);
}).then((res) => {
  console.log('children7');
  setTimeout(() => {
    console.log(res);
  }, 0);
})

// start
// children4
// children2
// children5
// children3
// children7
// children6

// 第一轮执行：

// // start

// 进入宏任务：
// console.log('children2');
// Promise.resolve().then(() => {
//   console.log('children3');
// })

// // children4

// 进入宏任务:
// console.log('children5');
// resolve('children6');


// -------------------------------

// 第二轮执行:

// // children2

// 进入微任务:
// console.log('children3');

// // children5

// 进入微任务:
// console.log('children7');
//   setTimeout(() => {
//     console.log(res);
//   }, 0);

// 执行微任务:
// // children3
// // children7

// 进入宏任务:
// console.log(res);

// ------------------------------

// 第三轮执行:

// children6



