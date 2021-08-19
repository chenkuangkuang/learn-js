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

// var arr = [7, 4, 3, 8, 9, 1, 10];

//  官方实现
function insertSort2(arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = i;
        let target = arr[j];
        // 处理当前项时，确保当前项左边的已经是从小到大的已排序数组
        // 针对每一项，向左依次比较，左边的比当前项大就往左移动一格，直到左边的比当前项小
        while (j > 0 && arr[j - 1] > target) {
            // 满足左边大于右边，则让右边值 =  左边值 （最初的右边值存在target）
            arr[j] = arr[j - 1];
            j--;
        }
        // 把当前项放到对应位置
        arr[j] = target;
    }
    return arr;
}


const re = insertSort(arr);
console.log('=re=', re);