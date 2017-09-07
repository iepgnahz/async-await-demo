let getPromise = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('this is value');
        }, time);
    })
};

let createAsyncFunction = async () => {
    console.log('start function');
    let result = await getPromise(3000);
    console.log('end and the result is :'+result);
};

createAsyncFunction();
