function side(arr) {
  arr[0] = arr[2];
}
function a(a, b, c = 3) {
  c = 10;
  side(arguments);
  return a + b + c;
}
const res = a(1, 1, 1); 

console.log('=res=', res);// 12