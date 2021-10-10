/**
 自定义instanceof 判断left 是否是 right 的实例
*/
function instanceOf(left, right) {
    // 请完善以下代码，不能使用原生instanceof
    
    // 简洁版（一级判断）
    // return　left.__proto__ == right.prototype;
    // 实例的__proto__ 指向 构造函数的原型对象

    // 完善版（多级判断）
    let curProto = left.__proto__;
    while(curProto){
        if(curProto == right.prototype){
            return true;
        }
        curProto = curProto.__proto__;
    }
    return false;
}

class A{}
class B extends A {}
class C{}

const b = new B()
// 输出 true
console.log(instanceOf(b,B))
// 输出 true
console.log(instanceOf(b,A))
// 输出 false
console.log(instanceOf(b,C))
