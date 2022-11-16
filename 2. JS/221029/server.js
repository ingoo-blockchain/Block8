const user = {
    name: "",
    age: "",
}

function createUser(name, age) {
    return {
        name,
        age,
    }
}

function createUser(_name, _age) {
    this.name = _name
    this.age = _age
}

class Person {
    constructor(_name, _age) {
        this.name = _name
        this.age = _age
    }
}

const a = new createUser("ingoo", 32)
const b = new Person("ingoo", 32)

console.log(a)
console.log(b)
