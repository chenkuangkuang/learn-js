var arr = [0,1];
arr[5] = 5; // [ 0, 1, <3 empty items>, 5 ]
console.log(arr);
newArr = arr.filter(function(x) { return x === undefined;});
console.log(newArr.length); // 3



/* 

filter等函数不会对空值执行！！！


*/