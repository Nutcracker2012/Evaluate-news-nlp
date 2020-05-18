// const validateURL = require('./validateURL);
import { validateURL } from './validateURL'

// describe('Test the "validateURL" shall be of a type function', () => {
//     test('It should be a function', () => {
//         expect(typeof validateURL).toBe("function");
//     });
// });

describe("validate if it is URL", () => {
    let inputURL = "https://www.bbc.com/news/world-latin-america-52701524";
    test("to validate if the input is a URL, should return true", () => {
        // if (pattern.test(inputURL)) {
        //     return true
        //     console.log('this is URL')
        // }else{
        //     throw Error
        // }
        const response = validateURL(inputURL);
        expect(response).toBe(true);
    });
});

// to be falsy
describe("validate if it is URL", () => {
    let inputURL2 = "bbc.com-news-world-latin-america-52701524";
    test("to validate if the input is a URL, should return false", () => {
        const response = validateURL(inputURL2);
        expect(response).toBe(false);
    });
});