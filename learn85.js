// 实现一个trim方法：清除字符串首尾空格

function myTrim(str){
    if(typeof str !== 'string'){
        return;
    }
    // 正则说明：\s 匹配任意空白字符，+匹配前面的子表达式一次或多次，|表示或，^ 和 $ 分别表示首尾，g表示全局匹配，查找所有的匹配项
    return str.replace(/^\s+|\s+$/g, '');
}


const str = "  xxdafdf ";

const re = myTrim(str);
console.log('=re=['+re+']');