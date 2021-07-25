const value  = 'Value is' + !!Number(['0']) ? 'yideng' : 'undefined';
console.log(value);
console.log(Number(['0']));

/* 

+ 优先级 大于 ?

!!Number(['0'])结果是false

Number(['0'])结果是 0 

*/