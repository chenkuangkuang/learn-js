(function () {
  var a = (b = 5);
})();

console.log(b); // 5
// console.log(a); // 报错  a is not defined


var c;

console.log('=c=', c); // undefined


