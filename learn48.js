let ydObject = { ...null, ...undefined };
console.log(ydObject); // {}
let ydArray = [...null, ...undefined];
console.log(ydArray); // VM56:3 Uncaught TypeError: null is not iterable