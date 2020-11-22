const KEYS = require('../ApiCaller/keys.json')

const findKey = (input) => {
    const inputRegex = RegExp(input.split('').join('.*'))
    var results = KEYS.filter((key) => {
        return inputRegex.exec(key)
    })
    return results
}

export { findKey }