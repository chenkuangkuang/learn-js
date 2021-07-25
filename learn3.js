const p = function () {
  return new Promise((resolve, reject) => {
    const p1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(1) // 忽略
      }, 0);
      resolve(2)
    })
    p1.then((res) => {
      console.log(res);
    })
    console.log(3);
    resolve(4)
  })
}

p().then((res) => {
  console.log(res);
})

console.log('end');

/* 
3
end
2
4
 */



/* 
第一轮执行：

搬入微任务：
p1.then((res) => {
    console.log(res);
})

输出3

进入微任务：
resolve(4)

输出end

第一轮微任务：

输出2

输出4




*/