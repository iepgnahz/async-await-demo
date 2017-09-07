let getPromise = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('this is err value');
        }, time);
    })
};

let createAsyncFunction = async () => {
    try {
        console.log('start function');
        let result = await getPromise(3000);
        // 如果有错误 那么await之后的代码都不会被执行了
        console.log('end and the result is :' + result);
    } catch (err) {
        console.log('end and the err is :' + err);
    }

};

createAsyncFunction();

