// var foo = function bar(){ return 12; };
// console.log(typeof bar());


/* 

var foo = function bar(){ 
    // foo is visible here 
    // bar is visible here
    console.log(typeof bar()); // Work here :)
};
// foo is visible here
// bar is undefined here

*/

function aa() {
  return 1;
}

console.log('=aa=', aa); // [Function aa]


var bb = function cc() {
  return 2;
}

console.log('=bb=', bb); // [Function cc]
console.log('=cc=', cc); // cc is not defined


/* 

命名函数表达式函数只能在函数体内有效

*/