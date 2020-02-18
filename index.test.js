const {
    firstFunction
} = require('./index.js');

test('basic test', () => {
    expect(firstFunction).toBeDefined();
})