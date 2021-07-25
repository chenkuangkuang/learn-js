function PromiseAll(promiseArray) {
  return new Promise((resolve, reject) => {
    let index = 0, resArr = [], errorArr = [];
    for (var i = 0; i < promiseArray.length; i++){
      promiseArray[i].then((res) => {
        index++;
        resArr.push(res);
        if (index == promiseArray.length) {
          resolve(resArr);
        }
      }).catch(e => {
        errorArr.push(e);
        
      })
    }
  })
}

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 2000);
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 3000);
})

const proAll = PromiseAll([p1, p2, p3])
  .then(res => {
    console.log(res);
  }).catch((e) => {
    console.log(e);
  })