var fullname = 'a';
var obj = {
   fullname: 'b',
   prop: {
      fullname: 'c',
      getFullname: function() {
         return this.fullname;
      }
   }
};
 
console.log(obj.prop.getFullname()); // c
var test = obj.prop.getFullname;
console.log(test());  // a

/* 

this指向的是函数的执行环境，this取决于其被谁调用了，而不是被谁定义了

*/