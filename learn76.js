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
                // let cache = arr[i];
                // console.log('=cache=', cache);
                // arr[i] = arr[j];
                // arr[j] = cache;
                // 使用数组结构，进行交换
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
    return arr;
}

const re = bubbleSort(arr);
console.log('=re=', re);