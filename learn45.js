function showCase(value) {
  switch (value) {
    case 'A':
      console.log('Case A');
      break;
    case 'B':
      console.log('Case B');
      break;
    case undefined:
      console.log('undefined');
      break;
    default:
      console.log('Do not know!');
  }
}
showCase(new String('A')); // Do not know!

console.log(new String('A')); // [String: 'A']  

console.log(typeof new String('A')); // object

/* 

new String('A') 得到的是一个实例化的对象

*/