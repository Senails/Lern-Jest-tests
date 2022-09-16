const { Ajax } = require('./async');
const axios = require('axios');

jest.mock('axios');


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

describe("Ajax Get", () => {
    let res;
    let todos;

    beforeEach(() => {
        todos = [
            { id: 1, titel: "Todo1", completed: false }
        ]
        res = {
            data: { todos }
        }
    })

    test("shoud return data", () => {
        axios.get.mockReturnValue(res);

        return Ajax.get().then((data) => {
            expect(data.todos).toEqual(todos)
        })
    })
})


























//