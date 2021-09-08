// 二维数组转一维

var array = [[1, 2, 3], 4, 5, 6, [[7]], []];

function flatten(arr) {
    let str = "";

    for(var i of arr){
        if(Array.isArray(i)){
            const deepStr = (flatten(i)).join("");
            console.log('=deepStr=', deepStr);
            str += deepStr;
        }else{
            str += i;
        }
    }
    return str.split("");
}


var result = flatten(array);

console.log(result)