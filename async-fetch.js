require("isomorphic-fetch");

(async () => {
    try {
        let res = await fetch('http://think2011.net/2015/11/09/ES7-Async-Await/');
        let data = await res.text();
        console.log('fetch result is :' + data)
    } catch (err) {
        console.log('err is :' + err);
    }
})();
