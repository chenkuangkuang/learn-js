// 手写loadsh的get函数，传参格式：data元对象数据，path形如'a.b.c[0]'

const get = (data, path, defaultValue = void 0) => {
  const pathArr = path.split(".");
  let finalVal = data;
  console.log('=finalVal=', finalVal);
  for (let i of pathArr) {
    // 匹配c[0]这种数组取值
    if (/\[/g.test(i) && /\]$/.test(i)) {
      const curKey = i.replace(/(\S+)\[[0-9]+\]/g, '$1'); // 将c[0]中的c取出
      const curIndex = i.replace(/\S+\[([0-9]+)\]/g, '$1');
      finalVal = finalVal[curKey][curIndex];
      console.log('=finalVal=11', finalVal);
      continue;
    }
    finalVal = finalVal && finalVal[i];
    console.log('=finalVal=', finalVal, i);

  }
  return finalVal || defaultValue;
}

const obj = {
  a: {
    b: {
      c: [1, 2, 3]
    }
  }
}

console.log(get(obj, 'a.b.c[1]', 'xxx'));


/* 

心得：

1.使用\b 匹配 数字 （代替[0-9]这样的写法）

2.


*/
