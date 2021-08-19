/* 

二分查找：确定一个数在一个有序数组中的位置

*/


function search(arr, target, start, end) {

    let targetIndex = -1;

    const mid = start + end >> 1;
    console.log('=mid=', mid);

    if (target == arr[mid]) {
        targetIndex = mid;
        return targetIndex;
    }

    if (start >= end) {
        return targetIndex;
    }

    if (target > arr[mid]) {
        return search(arr, target, mid + 1, end);
    } else {
        return search(arr, target, start, mid - 1);
    }
}


const dataArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const position = search(dataArr, 6, 0, dataArr.length - 1);
if (position !== -1) {
    console.log(`目标元素6在数组中的位置:${position}`);
} else {
    console.log("目标元素6不在数组中");
}