var p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 1000);
})

p1.then(e => {
    console.log('第1次then:', e); // 1
    return 2;
}).then(e => {
    console.log('第2次then:', e); // 2
}).then(e => {
    console.log('第3次then:', e); // undefined
    return 3
}).then(e=>{
    console.log('第4次then:', e); // 3
})

// var re = p1.then(e => {
//     console.log('第11次then:', e); // 1
// })

// re.then(e => {
//     console.log('第12次then:', e); // undefined
// })

// console.log('=re=', re); // then 默认返回 原Promise

// p1.then(e => {
//     console.log('第22次then:', e); // 1
// })

// p1.then(e => {
//     console.log('第33次then:', e); // 1
//     console.log('=re=22', re); // Promise { undefined }
// })