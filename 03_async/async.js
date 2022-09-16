const { default: axios } = require("axios");

class Ajax {
    static echo(data) {
        return new Promise((res, rej) => {
            setTimeout(() => {
                data ? res(data) : rej(new Error("error"));
            }, 200)
        })
    }

    static async get() {
        try {
            let res = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
            return res.data
        } catch (e) {
            console.log(e.message);
        }
    }
}



module.exports = { Ajax }






















//