const fizzbuzz = require('./fizzbuzz')

describe("Fizzbuzz", () => {
    test("Argument must be a number", () => {  
        const expected = 'Error: Argument of Fizzbuzz must be a number'
        const result = fizzbuzz("2")
        expect(expected).toBe(result)
    })
    
    test("Sould print 1 if receive 1", () => {
        const expected = 1
        const result = fizzbuzz(1)
        expect(expected).toBe(result)
    })
    
    test("Should print Fizz if number is divisible by 3", () => {
        const expected = 'Fizz'
        const result = fizzbuzz(9)
        expect(expected).toBe(result)
    })
    
    test("Should print Buzz if number is divisible by 5", () => {
        const expected = 'Buzz'
        const result = fizzbuzz(5)
        expect(expected).toBe(result)
    })

    test("Should prin FizzBuzz if number is divisible by 3 and 5", () => {
        const expected = 'FizzBuzz'
        const result = fizzbuzz(15)
        expect(expected).toBe(result)
    })

})