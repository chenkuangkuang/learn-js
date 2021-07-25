var obj = {};
var x = +obj.yideng?.name ?? '京程一灯';
console.log(x); //NaN


/* 

?. 如果无此属性，就会返回undefined， 因为前面有个 + , 转化为 NaN

?? 后面跟默认值

*/

var y = undefined ?? '京程一灯';
console.log(y); //京程一灯


var obj2 = {
  a: {
    aa: 1
  },
  b: 2,
}

var z = obj2?.a?.aa;
console.log(z); // 1
var q = obj2?.c?.aa
console.log(q); // undefined