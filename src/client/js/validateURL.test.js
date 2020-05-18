const validateURL = require('./validateURL')


describe("validate URL", () => {
    let inputURL = "https://www.bbc.com/news/world-latin-america-52701524"
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

describe("validate URL", () => {
    let inputURL2 = "foxn/ews.com media/elon-musk-cnn-ventilators"
    test("to validate if the input is a URL, should return false", () => {
        const response = validateURL(inputURL2);
        expect(response).toBe(false);
    });
});