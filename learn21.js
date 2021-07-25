// 手写 new

function myNew(func, ...args) {
  var obj = Object.create(null);
  obj._proto_ = func.prototype;
  const re = func.apply(obj, args);
  // 如果func返回了正常的对象，则直接使用返回值，否则使用新建的对象obj
  return re instanceof Object ? re : obj;
}