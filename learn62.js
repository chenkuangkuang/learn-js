// 正则表达式相关的方法

var reg = /[a-zA-Z]+/;

var str = 'version.html';

var result;

// match 字符串专用，传参为正则或字符串

result = str.match(reg);

//[ 'version', index: 0, input: 'version.html', groups: undefined ]
console.log('=result=', result);



//replace 字符串专用，传参为正则+字符串 或 正则+回调函数

result = str.replace(reg, '111');
// 111.html
console.log('=result=', result);


result = str.replace(reg, function(){
    return '222';
});
// 222.html
console.log('=result=', result);




//test: 正则对象调用，参数为字符串

result = reg.test(str);
// true
console.log('=result=', result);
