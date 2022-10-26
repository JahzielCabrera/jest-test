function compareIfModuleIsZero(num, divider) {
    return num % divider === 0
}

function fizzbuzz(number) {
    if(typeof number !== 'number') {
        return "Error: Argument of Fizzbuzz must be a number"
    }
    if(number === 0) {
        return number
    }
    if(compareIfModuleIsZero(number, 3) && compareIfModuleIsZero(number, 5)) {
        return 'FizzBuzz'
    }
    if(compareIfModuleIsZero(number, 3)) {
        return 'Fizz'
    }
    if(compareIfModuleIsZero(number, 5)) {
        return 'Buzz'
    }
    return number
}

function printFizzBuzz(num) {
    for(let i = 0; i <= num; i++) {
        console.log(`${i}: ${fizzbuzz(i)}`)
    }
}

printFizzBuzz(1000)

module.exports = fizzbuzz