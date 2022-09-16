class Ajax {
    static echo(data) {
        return new Promise((res, rej) => {
            setTimeout(() => {
                data ? res(data) : rej(new Error("error"));
            }, 200)
        })
    }
}



module.exports = { Ajax }






















//