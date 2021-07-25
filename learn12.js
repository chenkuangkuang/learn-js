function changeObjProperty(o) {
  o.siteUrl = "http://www.baidu.com"
  o = new Object()
  o.siteUrl = "http://www.google.com"
} 
let webSite = new Object();
changeObjProperty(webSite);
console.log(webSite.siteUrl);

// http://www.baidu.com

/* 

原因是，传入changeObjProperty 的 webSite 在第一行指向了baidu.com，

第二行则是把局部变量o重新声明了，与webSite无关了

*/