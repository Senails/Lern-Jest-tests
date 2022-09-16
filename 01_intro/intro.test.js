const { sum, nativenull } = require('./intro')

describe("Sum function", () => {
    test(" test return", () => {
        expect(sum(4, 5)).toBe(9)
        expect(sum(4, 5)).toEqual(9)
    });

    test(" shoud return value comparimg to other", () => {
        expect(sum(2, 3)).toBeGreaterThan(4)
        expect(sum(2, 3)).toBeGreaterThanOrEqual(5)
        expect(sum(2, 3)).toBeLessThanOrEqual(5)
        expect(sum(2, 3)).toBeLessThan(20)
    });

    test(" need be correct", () => {
        expect(sum(0.1, 0.2)).toBeCloseTo(0.3)
    });

})

describe('Native null', () => {
    test(" wait null", () => {
        expect(nativenull()).toBe(null);
        expect(nativenull()).toBeNull();
        expect(nativenull()).toBeFalsy();
        expect(nativenull()).toBeDefined();
        expect(nativenull()).not.toBeTruthy();
        expect(nativenull()).not.toBeUndefined();
    });
})


















//