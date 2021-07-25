// 实现a(1)(2)(3)的加法

const add = (a, b, c) => a + b + c;

const curry = (fn, ...args) => {
  args = args || [];
  console.log('=args=', args);
  return function(...rest) {
    const needArgsLength = fn.length;
    let allArgs = [...args, ...rest];
    if (allArgs.length < needArgsLength) {
      // 把当前参数传入，供下一次调用函数时一起使用
      console.log('进入下一层', allArgs);
      return curry.call(this, fn, ...allArgs);
    }
    console.log('触发函数',);
    return fn.apply(this, allArgs);
  }
}

const createCurry = (fn, ...args) => {
  let _args = args || [];
  console.log('=_args=', _args);
  return (...rest) => {
      let _allArgs = _args;  
      // 深拷贝闭包共用对象_args，避免后续操作影响（引用类型）
      _allArgs.push(...rest);
      if (_allArgs.length < fn.length) {
          // 参数数量不满足原始函数数量，返回curry函数
          return createCurry.call(this, fn, ..._allArgs);
      } else {
          // 参数数量满足原始函数数量，触发执行
          return fn.apply(this, _allArgs);
      }
  }
}


const plusAdd = curry(add);

const res = plusAdd(1)(2)(3);

console.log('re=', res);


/*

面试题总结

1.获取数组第一项后面的所有项
slice()


*/