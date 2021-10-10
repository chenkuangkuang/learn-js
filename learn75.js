/*  
已知如下数组：
var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
编写一个程序将数组扁平化
 */

var arr = [
    [1, 2, 2],
    [3, 4, 5, 5],
    [6, 7, 8, 9, [11, 12, [12, 13, [14]]]],
    10
];

function arr2str(arr) {
    let re = '';
    for (var i in arr) {
        let item = arr[i];
        if (Array.isArray(item)) {
            re += handle(item);
        } else {
            re += item + ',';
        }
    }
    return re;
}

function handle(arr) {
    let str = arr2str(arr);
    return str.split(",");
}

const res = handle(arr);
console.log('=res=', res);