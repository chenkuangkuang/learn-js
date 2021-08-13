// promise.then 不同类型值的 传递

var p1 = Promise.resolve(42);


//第一种，返回一个 new promise
p1.then((value) => {
    return new Promise((resolve, reject) => {
        resolve(value + 1)
    })
}).then((val) => {
    console.log('=re1=', val); // => 43
})

// 第二种，返回一个值
p1.then((value) => {
    return value + 1;
}).then((val) => {
    console.log('=re2=', val); // => 43 优先与返回promise的执行
})

// 第三种，不返回，创建promise
p1.then((value) => {
    new Promise((resolve, reject) => {
        resolve(value + 1)
    })
}).then((val) => {
    console.log('=re3=', val); // => undefined 优先re1 执行
})


//第四种，创建promise，使用return返回数值
p1.then((value) => {
    new Promise((resolve, reject) => {
        return value + 1;
    })
}).then((val) => {
    console.log('=re4=', val); // => undefined 优先re1 执行
})

// 第五种，不返回
p1.then((value) => {
    
}).then((val) => {
    console.log('=re5=', val); // => undefined 优先re1 执行
})