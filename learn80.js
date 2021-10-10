/* 

归并排序：把数组按中间位置分为两堆，直到分成两个单独的数，再合并到数组，然后合并两个有序数组

*/

var arr = [7, 4, 3, 8, 9, 1, 10];

// 合并两个有序数组
function merge(left, right) {

    let resultArr = [];
    while (left.length || right.length) {
        console.log('=left, right=', left, right);
        if ((left.length && right.length && left[0] > right[0]) || (right.length && !left.length)) {
            resultArr.push(right.shift())
        } else if (left.length && right.length && left[0] < right[0] || (!right.length && left.length)) {
            resultArr.push(left.shift())
        }
    }
    return resultArr;
}

function mergeSort(arr) {
    let len = arr.length;
    if (len <= 1) {
        return arr;
    }
    const mid = Math.floor(len / 2);
    console.log('=mid=', mid);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid, len));
    console.log('=left, right=', left, right);
    return merge(left, right);
}

const re = mergeSort(arr);
// const re = merge([1, 2, 3], [4, 5, 6])
console.log('=re=', re);
  // console.log(mergeSort([3, 6, 2, 4, 1]));