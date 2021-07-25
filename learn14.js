var a = { n: 1 };
var b = a;
a.x = a = { n: 2 };

console.log(a.x) 	//undefiend
console.log(b.x) // {n: 2}

console.log('=a=', a);
console.log('=b=', b);

/*

a.x的优先级高于=等于号，所以a.x = a先执行，但是注意这里只执行了声明，a.x = undefiend。之后按正常情况执行

第一步
a = { n: 2 }

第二步
a.x = {n：2} 此时因为a.x是a转变指向之前声明的，使用的是旧对象，所以连带b.x也变成了{n：2}

第三步
求a值，解析a。a已经变成新对象了，x值为undefiend。a = {n:2}
求b值，b = {n:1, x:{n:2}}

*/