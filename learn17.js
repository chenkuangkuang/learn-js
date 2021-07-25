// 实现一个sleep，共3种方式：
// 1.promise
// 2.callback
// 3.while循环

function sleep1(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  })
}
// 使用方式：sleep1(1000).then(()=>{...})


function sleep2(time, callback) {
  setTimeout(() => {
    callback && callback();
  }, time);
}

function sleep3(time) {
  const nowBeforeInWhile = Date.now();
  while(Date.now() - nowBeforeInWhile < time){}
}