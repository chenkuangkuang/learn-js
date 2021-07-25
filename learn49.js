function foo(){
  console.log(length);
}
function bar(){
 var length = "京程一灯";
 foo();
}
bar(); // window环境:0        node环境:length is not defined

/* 

在foo函数中，length指向window对象

foo虽然是在bar中调用（只是调用，而非声明），但无法获取到bar的变量



*/