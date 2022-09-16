const { Ajax } = require('./async')


describe('Ajax tests: echo', () => {

    test('Return async value', async() => {
        let res = await Ajax.echo('data');
        expect(res).toBe('data')
    })

    test('Shoud return Promise', async() => {
        let res = Ajax.echo('data');
        expect(res).toBeInstanceOf(Promise);
    })

    test('Shoud return Error', async() => {
        try {
            await Ajax.echo();
        } catch (error) {
            expect(error.message).toBe('error')
        }
    })
})


























//