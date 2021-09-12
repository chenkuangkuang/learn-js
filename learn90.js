// 防抖，当fn频繁触发时，（一定时间段内）只执行最后一次的fn
// 原理：第一次设定延迟执行，此后每次触发时重新设置延迟函数，直到最后一次设定，正常执行延迟
function debounce(fn, delay) {
    let timer = null;
    return function () {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
        timer = setTimeout(() => {
            // apply的第二个参数是参数数组
            fn.apply(this, arguments)
        }, delay);
    }
}

// 节流，当fn频繁触发时，（一定时间段内）只执行第一次的fn
// 原理：第一次进入函数，阈值置false，此后每次触发判断阈值是否为true（是否可执行），直到之前的延迟结束，阈值置true，后面的才能进入执行
function throttle(fn, delay) {
    let canHanle = false;
    return function () {
        if (!canHanle) {
            return;
        }
        canHanle = false;
        setTimeout(() => {
            fn.apply(this, arguments);
            canHanle = true;
        }, delay);
    }
}