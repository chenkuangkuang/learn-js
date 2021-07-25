// div-capture > btn-bubble > btn-capture > div-bubble
var btn = document.querySelector('button');
var div = document.querySelector('div');

btn.addEventListener('click', function(){
    console.log('bubble','btn');
},false);
btn.addEventListener('click', function(){
    console.log('capture','btn');
},true);

div.addEventListener('click', function(){
    console.log('bubble','div');
},false);
div.addEventListener('click', function(){
    console.log('capture','div');
}, true);


/* 

1.addEventListener 第三个参数：true是捕获时执行，默认是冒泡时执行
2.事件顺序：先父到子捕获，再子到父冒泡

*/