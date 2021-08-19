/* 

快速排序：递归分割数组为两堆：较小的一堆 和 较大的一堆

*/

var arr = [7, 4, 3, 8, 9, 1, 10];

function quickSort(arr) {
    console.log('=arr=', arr);
    const len = arr.length;
    if (len <= 1) {
        return arr;
    }
    let minArr = [], maxArr = [], cur = arr[0];
    for (var i = 1; i < len; i++) {
        const item = arr[i];
        if (item > cur) {
            maxArr.push(item)
        } else {
            minArr.push(item);
        }
    }
    console.log('=minArr, =', minArr, maxArr);
    // 合并较小数组和较大数组
    return [].concat(quickSort(minArr), cur, quickSort(maxArr));
}

// 官方实现
function quickSort2(arr) {
    if (arr.length < 2) {
        return arr;
    }
    const cur = arr[arr.length - 1];
    const left = arr.filter((v, i) => v <= cur && i !== arr.length - 1);
    const right = arr.filter((v) => v > cur);
    return [...quickSort(left), cur, ...quickSort(right)];
}

const re = quickSort(arr);
console.log('=re=', re);