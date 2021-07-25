var a = 10;
(function a(){
    a = 20;
    console.log(a);  // [Function: a]
})();


/* 

首先函数声明比变量要高，
其次b = 20 没有var ，说明是window最外层定义的变量。
js作用域中，先找最近的 那就是b fn ，直接打印了，如果 b = 20 有var 那就是打印20

*/

var b = 10;
function b(){
    b = 20;
    console.log(b);  //b is not a function
}

b(); 



// 区别是？立即执行的是函数表达式，

var c = 10;
(function c(){
   c = 20;
   console.log(window.c); //10 
})();

var d = 10;
(function d(){
   var d = 20;
   console.log(d);//20
})();