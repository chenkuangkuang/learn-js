function lowerCase(input) {
    return input && typeof input === "string" ? input.toLowerCase() : input;
}

function upperCase(input) {
    return input && typeof input === "string" ? input.toUpperCase() : input;
}

function trim(input) {
    return typeof input === "string" ? input.trim() : input;
}

function split(input, delimiter = ",") {
    return typeof input === "string" ? input.split(delimiter) : input;
}

function compose(...funcs) {
    // 返回一个函数，此函数传递的参数将被每个函数依次执行（每个执行的结果向下传递）
    return function (arg) {
        // reduce 第二个参数是初始值
        return funcs.reduce((result, nextFun)=>{
            return nextFun(result)
        }, arg)
    }
}

// compose函数的实现，请参考 “组合函数的实现” 部分。
const trimLowerCaseAndSplit = compose(trim, lowerCase, split);
const re = trimLowerCaseAndSplit(" a,B,C "); // ["a", "b", "c"]
console.log('=re=', re);
