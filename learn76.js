/* 

通过两层循环，依次比较数组中前后两个值，满足条件则调换顺序，直至外层循环结束

*/

// 冒泡排序 从小到大
var arr = [7, 4, 3, 8, 9, 1, 10];

function bubbleSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            // 如果左边的大于右边的，调换顺序
            console.log('=123=', arr[i], arr[j]);
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
    return arr;
}

// 官方实现

function bubbleSort2(arr) {
    // 缓存数组长度
    const len = arr.length;
    // 外层循环用于控制从头到尾的比较+交换到底有多少轮
    for (let i = 0; i < len; i++) {
      // 内层循环用于完成每一轮遍历过程中的重复比较+交换
      for (let j = 0; j < len - 1; j++) {
        // 若相邻元素前面的数比后面的大
        if (arr[j] > arr[j + 1]) {
          // 交换两者
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    // 返回数组
    return arr;
  }
  

const re = bubbleSort(arr);
console.log('=re=', re);