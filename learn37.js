// 手写 instanceof

// a是否是b的实例
function myInstanceOf(aObj, bFunc) {
  // a必须是对象，b必须是函数（构造函数）
  if (typeof aObj !== 'object' || Array.isArray(aObj)) {
    return;
  }
  if (typeof bFunc != 'function') {
    return;
  }
  // 应有逻辑 aObj._proto_(或者aObj的原型的_proto_) == bFunc.prototype
  var aProto = aObj._proto_;
  var bPortotype = bFunc.prototype;
  // 一直往上找aObj的proto，直到找到最顶层，如果有能和bFunc的prototype相等的，那就是后者的实例
  while (true) {
    if (aProto === null) {
      return false;
    }
    if (aProto == bPortotype) {
      return true;
    }
    aProto = aProto._proto_;
  }
}