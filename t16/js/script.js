'use strict'
function firstElements(arr, n) {
    let res = [];

    for (let i = 0; i < n; i++)
        res.push(arr[i]);
    return res;
}
//https://expressjs.com/ru/guide/using-middleware.html