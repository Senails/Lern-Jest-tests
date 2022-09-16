const { Lodash } = require('./sync')
let _ = new Lodash();

describe('Lodash compact', () => {
    let arr;

    beforeEach(() => {
        arr = [1, 2, 4, 0, false, null, '', true, 'dsfes', undefined];
    })

    afterAll(() => {
        _ = new Lodash();
    })

    test('shoud be defind', () => {
        expect(_.compact).toBeDefined();
        expect(_.compact).not.toBeUndefined();
    })

    test('egitable array', () => {
        arr.push(...['one', 'two']);
        expect(arr).toContain('two');
        expect(arr).toContain('one');
    })


    test('shoud remove falsy', () => {
        const rez = [1, 2, 4, true, 'dsfes'];
        expect(_.compact(arr)).toEqual(rez);
    })

    test('shoud not contein false', () => {
        expect(_.compact(arr)).not.toContain(false);
        expect(_.compact(arr)).not.toContain(0);
        expect(_.compact(arr)).not.toContain('');
        expect(_.compact(arr)).not.toContain(null);
        expect(_.compact(arr)).not.toContain(undefined);
    })
})


describe("Lodash groupby", () => {
    beforeEach(() => {
        arr = [1, 2, 4, 0, false, null, '', true, 'dsfes', undefined];
    })

    test('shoud be defind', () => {
        expect(_.groupby).toBeDefined();
        expect(_.groupby).not.toBeUndefined();
    })

    test("group array by Math.floor", () => {
        let arr = [2.2, 3.4, 1.5, 2.6, 3.7, 1.8];
        let rez = {
            1: [1.5, 1.8],
            2: [2.2, 2.6],
            3: [3.4, 3.7]
        }
        expect(_.groupby(arr, Math.floor)).toEqual(rez);
    })

    test("group array by lenght", () => {
        let arr = ['one', 'two', 'three'];
        let rez = {
            3: ['one', 'two'],
            5: ['three']
        }

        expect(_.groupby(arr, 'length')).toEqual(rez);
    })

    test("shoud not return array", () => {
        expect(_.groupby([], Math.trunc)).not.toBeInstanceOf(Array);
    })
})


















//