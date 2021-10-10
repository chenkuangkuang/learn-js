// for 循环的结束条件
// 类似于while，最后i=3，不满足i<3的条件，结束循环

for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log("i", i);
    }, 1000);
}
console.log('=i=22', i);