function ingoo(callback) {
    return callback
}

function goak(callback) {
    const fn = function () {
        console.log("1")
        return 30
    }
    const result = 1 + callback(fn)
    console.log("2")
    return result
}

function getNumber(callback) {
    console.log("3")
    return 2 * callback()
}

console.log(goak(getNumber))
console.log(getNumber(() => 60))
