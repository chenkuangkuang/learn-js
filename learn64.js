// 如下为一段代码，请完善sum函数，使得 sum(1,2,3,4,5,6) 函数返回值为 21 ,需要在 sum 函数中调用 asyncAdd 函数进行数值运算，且不能修改asyncAdd函数

/**
 * 请在 sum函数中调用此函数，完成数值计算
 * @param {*} a 要相加的第一个值
 * @param {*} b 要相加的第二个值
 * @param {*} callback 相加之后的回调函数
 */
function asyncAdd(a, b, callback) {
    setTimeout(function () {
        callback(null, a + b)
    }, 1000)
}

/**
 * 请在此方法中调用asyncAdd方法，完成数值计算
 * @param  {...any} rest 传入的参数
 */
async function sum(...rest) {
    // 方案一：使用递归
    // return new Promise((resolve, reject) => {
    //     let index = 0, total = 0;
    //     const add = (nouse, num) => {
    //         total = num;
    //         const item = rest[index];
    //         console.log('=total=', index, item, total);
    //         if (item) {
    //             asyncAdd(num, item, add);
    //         } else {
    //             resolve(total);
    //         }
    //         index++;
    //     }
    //     add(null, 0);
    // })

    // 方案二，循环 + promise
    // let result = 0;
    // for(let i of rest){
    //     result = await new Promise((resolve, reject)=>{
    //         asyncAdd(result, i, (_, num)=>{
    //             resolve(num);// 把两数之和传回promise
    //         })
    //     })
    // }
    // return result;

    // 方案三：隐式类型转换
    let result = 0
    // 隐氏类型转换， 对象 + 数字，会先调用对象的toString 方法
    const obj = {}
    obj.toString = function () {
        console.log('=result=', result);
        return result
    }
    const promises = []
    for (let num of rest) {
        promises.push(new Promise((resolve) => {
            asyncAdd(obj, num, (_, res) => {
                resolve(res)
            })
        }).then(res => {
            // 在这里将 result的值改变之后，obj.toString 的返回值就变了，这时候下一个setTimeout调用时就使用了新值
            result = res
        }))
    }
    await Promise.all(promises)
    return result

}

let start = new Date();
sum(1, 2, 3, 4, 5, 6).then(res => {
    // 请保证在调用sum方法之后，返回结果21
    console.log(res)
    console.log(`程序执行共耗时: ${new Date() - start}`)
})

/*

解决方案：使用递归

*/

