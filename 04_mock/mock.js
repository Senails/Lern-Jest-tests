function map(arr, callback) {
    let res = [];

    for (let elem of arr) {
        res.push(callback(elem))
    }

    return res;
}



module.exports = { map };













//