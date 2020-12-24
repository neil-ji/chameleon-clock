import assert from 'assert'
const myFirstFunc = (str?: string) => {
    return `hello ${str}`;
};

describe('validate:', () => {
    /**
     * myFirstFunc
     */
    describe('myFirstFunc', () => {
        test(' return hello rollup ', () => {
            assert.strictEqual(myFirstFunc('rollup'), 'hello rollup')
        })
    })
})