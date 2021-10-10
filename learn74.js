// 深度优先 和 广度优先

// 深度优先遍历 和 广度优先遍历 

const data = [
    {
        name: 'a',
        children: [
            { name: 'b', children: [{ name: 'e' }] },
            { name: 'c', children: [{ name: 'f' }] },
            { name: 'd', children: [{ name: 'g' }] },
        ],
    },
    {
        name: 'a2',
        children: [
            { name: 'b2', children: [{ name: 'e2' }] },
            { name: 'c2', children: [{ name: 'f2' }] },
            { name: 'd2', children: [{ name: 'g2' }] },
        ],
    }
]

// 深度优先遍历: 基于递归

function deepFirstMap(arr) {
    for (var i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (Array.isArray(item.children)) {
            deepFirstMap(item.children);
        } else {
            console.log('=item=', item.name);
        }
    }
}

// deepFirstMap(arr);

// 深度优先拷贝

function deepFirstCopy(obj) {
    if (typeof obj != 'object') {
        return obj;
    }
    let newObj = Array.isArray(obj) ? [] : {};
    for (var i in obj) {
        if (typeof obj[i] == 'object') {
            newObj[i] = deepFirstCopy(obj[i])
        } else {
            newObj[i] = obj[i]
        }
    }
    return newObj;
}

// const re = deepFirstCopy(data);
// console.log('=re=', JSON.stringify(re), JSON.stringify(data),  JSON.stringify(data)== JSON.stringify(re));

// 广度优先遍历

function spanFirstMap(arr) {
    let queue = arr;
    console.log('=queue=', queue);
    while (queue.length) {
        queue.map(i => {
            const cur = queue.shift();
            console.log('=cur=', cur.name);
            if (cur.children)
                queue = [...queue, ...cur.children];
        })
    }
}

// 广度优先拷贝 
// TODO
function spanFirstCopy(obj) {
    let queue = obj;
    let queueArr = Object.keys(queue);
    let newObj = Array.isArray(obj) ? [] : {};
    while (queueArr.length) {
        for (let i in queue) {
            const item = queue[i];
            if(typeof item == 'object'){
                if(Array.isArray(item)){
                    newObj[i].children = [];
                }else{
                    
                }
            }else{
                newObj[i] = queue[i];
            }
        }
        queueArr = Object.keys(queue);
    }
    return newObj;
}

// spanFirstMap(data);

const re = spanFirstCopy(data);
console.log('=re=', JSON.stringify(re), JSON.stringify(data), JSON.stringify(data) == JSON.stringify(re));