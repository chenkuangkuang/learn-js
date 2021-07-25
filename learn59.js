// 扁平数据转成tree

let arr = [
  { id: 1, name: '部门1', pid: 0 },
  { id: 2, name: '部门2', pid: 1 },
  { id: 3, name: '部门3', pid: 1 },
  { id: 4, name: '部门4', pid: 3 },
  { id: 5, name: '部门5', pid: 4 },
];

/**
 * 递归查找，获取children
 */
 const getChildren = (data, result, pid) => {
   for (const item of data) {
    // 如果item的pid等于当前的id，则表示item是当前项的子集
    if (item.pid === pid) {
      const newItem = {...item, children: []};
      result.push(newItem);
      getChildren(data, newItem.children, item.id);
    }
  }
}

/* 
第一次进入，getChildren(arr, [], 0)
if(item.pid == 0){
  [].push({id: 1, name: '部门1', pid: 0, children:[]});
  result = [{id: 1, name: '部门1', pid: 0, children:[]}];
  getChildren(data, [], 1);
}

第二次递归进入，getChildren(arr, [], 1)
if(item.pid == 1){
  [].push({id: 2, name: '部门2', pid: 1, children:[]});
  result = [{id: 2, name: '部门2', pid: 1, children:[]}];
  getChildren(data, [], 2);
}

第三次循环进入，getChildren(arr, [], 1)
if(item.pid == 1){
  [].push({id: 3, name: '部门3', pid: 1, children:[]});
  result = [{id: 2, name: '部门2', pid: 1, children:[]}，{id: 3, name: '部门3', pid: 1, children:[]}];
  getChildren(data, [], 3);
}


*/

/**
* 转换方法
*/
const arrayToTree = (data, pid) => {
  const result = [];
  getChildren(data, result, pid)
  return result;
}

const res = arrayToTree(arr, 0);

console.log('=res=', JSON.stringify(res));

// // 先根据pid排序数组，小的在前面
// let sortArr = arr.sort((a, b) => a.pid - b.pid);

// console.log('=sortArr=', sortArr);

// let resultObj = {}, pidObj = {}, curObj;

// for (var i = 0; i < sortArr.length; i++){
//   const item = sortArr[i];
//   // pid 变化
//   if (!pidObj[item.pid]) {
//     let curPidArr = sortArr.filter(x => x.pid == item.pid);
//     console.log('=curPidArr=', curPidArr);
//     curObj = getNewArr(resultObj, curPidArr);
//     pidObj[item.pid] = true;
//   }
// }

// const res = [resultObj];

// console.log('=res=', JSON.stringify(resultObj));

// function getNewArr(arr, childrenArr) {
//   arr.children = childrenArr;
//   return arr.children[0];
// }