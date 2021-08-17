/* 

插入排序：

在每次循环中，左边是已排序数据，右边是未排序数据，在右边取出一项，在左边找到对应位置插入


*/

var arr = [7, 4, 3, 8, 9, 1, 10];

function insertSort(arr) {
    let leftArr = [arr[0]], rightArr = arr.splice(0);
    for (var i = 1; i < rightArr.length; i++) {
        let rightItem = rightArr[i];
        for (var j = 0; j < leftArr.length; j++) {
            if (rightItem > leftArr[j] && (rightItem < leftArr[j + 1] || !leftArr[j + 1])) {
                leftArr = [...leftArr.slice(0, j + 1), rightItem, ...arr.slice(j + 1, leftArr.length)];
                console.log('=rightItem=', rightItem, j, leftArr);
                break;
            }
            if (rightItem < leftArr[j]) {
                leftArr.unshift(rightItem);
                console.log('=rightItem=22', rightItem, j, leftArr);
                break;
            }
        }
    }
    return leftArr;
}

const re = insertSort(arr);
console.log('=re=', re);