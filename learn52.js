const arr1 = ['a', 'b', 'c'];
const arr2 = ['b', 'c', 'a'];
console.log(
  arr1.sort() === arr1,
  arr2.sort() == arr2,
  arr1.sort() === arr2.sort()
); // true, true, false


console.log(arr1.sort(), arr2.sort());

/* 

sort()默认按字母顺序对数组中的元素进行排序，说得更精确点，是按照字符编码的顺序进行排序。

sort()的返回值：对数组的引用。请注意，数组在原数组上进行排序，不生成副本。


*/