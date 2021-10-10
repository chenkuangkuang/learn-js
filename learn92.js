// var 和 function 的声明顺序问题

var fn = function(){
    console.log(1);
}

function fn(){
    console.log(2);
}

fn();

/* 

function 的优先级高于 var

上述代码的执行顺序：

function fn(){
    console.log('2',);
}

var fn;

fn = function(){
    console.log('=1=', 1);
}

fn(); // 1


*/