var a = [0];
if (a) {
  console.log(a == true); // false
} else {
  console.log(a);
}

/* 

解析：

if(a) -> [0] 被转换成布尔值 -> true

[0] == true // [0] 先隐式调用join，转换成string得到"0"  string和boolean比较，都先转换成number，0 == 1 结果为false


*/