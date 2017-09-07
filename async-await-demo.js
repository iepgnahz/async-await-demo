// 第一步：先创建一个promise对象

const sleep = time => {
    return new Promise((successFunc, failFunc) => {
        setTimeout(() => {
            successFunc();
            console.log('是不是会执行呢？？？？')
        }, time)
    })
};

// 创建一个async函数

const start = async function () {
    console.log('start!');
    await sleep(1000);   //等待promise执行完了之后，才往下执行，而promise一旦调用了successFunc或者failFunc，说明现在可以继续向下执行了。而await的值，是传递给failFunc或者successFunc的参数
    console.log('end');
};

//调用async函数
start();

