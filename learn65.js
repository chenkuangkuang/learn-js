console.log(typeof (() => {})) //function

console.log(typeof ['前端有的玩','公众号'])//object

console.log(typeof null)//object

// null属于基本数据类型：undefined、string、number、boolean、symbol和null
// 但是typeof 无法判断
Number(null)===0; // true

console.log(typeof undefined)//undefined

console.log(typeof Function.prototype)//function
Function.prototype === Function.__proto__ // true
Function.prototype === Object.prototype// true

console.log('子君' instanceof String)//false
[0,1] instanceof Array // true
12.21 instanceof Number //=> false
// instanceof运算符仅适用于对象，不适用于原始布尔值，数字和字符串

console.log(new Date() instanceof Date)// true