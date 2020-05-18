import { handleSubmit } from './formHandler';
import regeneratorRuntime from "regenerator-runtime";

describe('Test "handleSubmit()" shall be defined', () => {
    test('It should be defined', async() => {
        expect(handleSubmit).toBeDefined();
    });
});

describe('Test the "handleSubmit" shall be of a type function', () => {
    test('It should be a function', async() => {
        expect(typeof handleSubmit).toBe("function");
    });
});