const handleSubmit = require('../client/js/formHandler')

describe('Test: "handleSubmit" should exist', () => {
    test('It should be defined', () => {
        expect(handleSubmit).toBeDefined();
    });
});

describe('Test: "handleSubmit" should be of the type function', () => {
    test('It should be a function', () => {
        expect(typeof handleSubmit).toBe("function");
    });
});