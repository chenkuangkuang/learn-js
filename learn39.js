// 手写对象拷贝

function copyObj(obj) {
  const objType = typeof obj;
  if (objType != 'object') {
    return obj;
  }
  else if (Array.isArray(obj)) {
    return obj.map(i => copyObj(i))
  }
  else {
    let newObj = {};
    for (let i in obj) {
      newObj[i] = copyObj(obj[i]);
    }
    return newObj;
  }
}

const obj1 = {
  a: 1,
  b: 'name',
  c: [1, 2, 3, '4', { 5: 6 }],
  d: { aa: 'bb', cc: [9, 8, 7], dd: { aaa: 1 } }
}

const res = copyObj(obj1);

console.log('=res=', res, res == obj1, res === obj1);