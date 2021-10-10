const a = {}
const b = Symbol('1')
const c = Symbol('1')
a[b] = '子君'
a[c] = '君子'

// 我是子君还是君子呢
console.log(a[b]); // 子君

const d = {}
const e = {key: '1'}
const f = {key: '2'}
d[e] = '子君'
d[f] = '君子'

// 我是子君还是君子呢
console.log(d[e], d) // 君子 key值被转换成字符串 '[object Object]'
