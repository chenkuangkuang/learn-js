var foo = {
  bar: function () {
    console.log('=this=', this); // window
      return this.baz;
  },
  baz:1
}
console.log(typeof (f = foo.bar)());// undefiend

// f=foo.bar 赋值操作返回值是目标函数的引用，则函数里面的this就变成了window