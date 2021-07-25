const num = {
  a: 10,
  add() {
    return this.a + 2;
  },
  reduce: () => (this.a - 2) // 箭头函数，指向外层正常函数，因为外层没有函数所以指向window ，window中没有a ，返回undefind 加上number 所以为NaN
};
console.log(num.add()); // 12
console.log(num.reduce()); // NaN