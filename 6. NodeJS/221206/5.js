// module.exports = {}
console.log(module.exports === exports)

module.exports = {name:'ingoo'}
module.exports.name = 'ingoo'
exports.name = 'ingoo'

exports.name = () => {
    return 'hello world!'
}

