// 实现一个函数，判断输入是不是回文字符串

function isPalindrome(str){
    if(typeof str != 'string'){
        return false;
    }
    return str.split("").reverse().join("") == str;
}