var a = {
    b: function () {
        console.log("b=", this);
    },
    c() {
        console.log("c=", this);
    },
    d: () => {
        console.log("d=", this);
    }
}

function b() {
    console.log("b2=", this);
}

b(); // global node中是{}

a.b(); // a

a.b.call(); // global
// 在非严格模式下，call传入null、undfined和不传，结果都是undefined


a.c(); // a

a.c.call(); // global

a.d(); // global
// 对象中的箭头函数属性的this，指向箭头函数所属对象外部对象(不管多少层都是global)的this

a.d.call(); // global


var x = {
    aa: {
        bb: () => {
            console.log('=this=', this);
        }
    }
}

x.aa.bb();

