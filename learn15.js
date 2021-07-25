var obj = {
  '2': 3,
  '3': 4,
  'length': 2,
  'splice': Array.prototype.splice,
  'push': Array.prototype.push
}
obj.push(1);
obj.push(2);
console.log(JSON.stringify(obj)); // {"2":1,"3":2,"length":4}


/* 

数组的push方法，就是当arr.push(1)的时候，让arr[arr.length] = 1，同时arr.length += 1;

*/