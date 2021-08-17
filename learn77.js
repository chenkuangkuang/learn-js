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

const re = bubbleSort(arr);
console.log('=re=', re);
