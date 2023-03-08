const obj = {
    name: "asdf",
    age: "123",
}

console.log(obj.hasOwnProperty("key")) // false
console.log(obj.hasOwnProperty("name")) // true

console.log(!obj.key)
