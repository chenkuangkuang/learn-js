/* 

选择排序思路：

在每次循环中，选择剩余未排序数组的最小值，放在最前

*/

var arr = [7, 4, 3, 8, 9, 1, 10];

function bubbleSort(arr) {
    let newArr = [];
    while (arr.length) {
        let min = Math.min.apply(Math, arr);
        let index = arr.indexOf(min);
        arr = [...arr.slice(0, index), ...arr.slice(index + 1, arr.length)];
        // slice 返回新数组，同时不会修改原数组 新数组开始于第一个参数对应元素，不包括第二个参数对应元素
        console.log('=min=', min, arr);
        newArr.push(min);
    }
    return newArr;
}

// 官方实现

function selectSort(arr) {
    // 缓存数组长度
    const len = arr.length;
    // 定义 minIndex，缓存当前区间最小值的索引，注意是索引
    let minIndex;
    // i 是当前排序区间的起点
    for (let i = 0; i < len - 1; i++) {
        // 初始化 minIndex 为当前区间第一个元素
        minIndex = i;
        // 每次二级循环：在剩余数组（从i处往右数到头）中找最小值，与当前值（arr[i]）交换
        // i、j分别定义当前区间的上下界，i是左边界，j是右边界
        for (let j = i; j < len; j++) {
            // 若 j 处的数据项比当前最小值还要小，则更新最小值索引为 j
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // 如果 minIndex 对应元素不是目前的头部元素，则交换两者
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}


const re = bubbleSort(arr);
console.log('=re=', re);
