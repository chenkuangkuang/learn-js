// 匹配出字符串中 const a = require('xxx') 中的 xxx

const str = "const a = require('xxx')";

const match = str.match(/\'(.+?)\'/g);

console.log('=match=', match);