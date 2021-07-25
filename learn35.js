// 手写JSON.stringify() 和 JSON.parse

function jsonStringify(obj) {
  const objType = typeof obj;
  let resultStr = '';
  // 除了 对象和数组，其他直接转字符串返回
  if (objType != 'object') {
    resultStr += obj;
  }
  else if (obj === null) {
    resultStr += 'null';
  }
  else {
    const isArray = Array.isArray(obj);
    resultStr += isArray ? '[' : '{';
    for (let i in obj) {
      if (isArray) {
        resultStr += jsonStringify(obj[i]) + ',';
      } else {
        resultStr += '"' + i + '":' + '"' + jsonStringify(obj[i]) + '"' + ',';
      }

    }
    // 干掉最末尾的逗号
    resultStr = resultStr.replace(/,$/g, '');
    resultStr += isArray ? ']' : '}';
  }

  return resultStr;
}


const testObj = {
  a: 1,
  b: 'name',
  c: [1, 2, 3, '4', { 5: 6 }],
  d: { aa: 'bb', cc: [9, 8, 7], dd: { aaa: 1 } },
  f: function () {
    return 1;
  },
  g: undefined,
  h: null
}

const res1 = JSON.stringify(testObj); // 忽略了function 和 undefiend
const res2 = jsonStringify(testObj);

console.log('=res1=', res1);
console.log('=res2=', res2);