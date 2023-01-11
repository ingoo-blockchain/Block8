class Person {
    // 접근제어자 public , private
    #key = 180
    constructor(_name, _age) {
        this.name = _name
        this.age = _age
    }

    static getName() {
        return "hello"
    }
}

class Ingoo extends Person {}

console.log(Ingoo.getName())
// name
// this -> Ingoo -> [[prototype]] --> getName
// super -> Person -> getName
