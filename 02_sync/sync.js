class Lodash {
    compact(arr) {
        return arr.filter((elem) => elem ? true : false);
    }
    groupby(arr, prop) {
        let res = arr.reduce((acc, elem) => {
            let key = (typeof prop === 'function') ? prop(elem) : elem[prop];

            !acc[key] && (acc[key] = [])

            acc[key].push(elem)

            return acc
        }, {})
        return res;
    }
}






module.exports = { Lodash };

//