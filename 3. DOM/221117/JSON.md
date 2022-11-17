// 그러면.. 데이터 공유가 정말 안되나..?

// method : get
// 데이터공유는 안되지만.. 데이터를 넘긴다.

// cookie .. 데이터 용량

// 브라우저 데이터를 저장합니다.
// 글자를 저장합니다. 파일명
document.cookie = "name=ingoo"

// localStorage 데이터 용량

const person = {
name: "ingoo",
age: 32,
}

console.log(person) // {name:'ingoo', age:32}

// Object -> String
const person2 = JSON.stringify(person)

console.log(person2) // {name:'ingoo', age:32}

// typeof
console.log(typeof person) // object
console.log(typeof person2) // string

const str = '{"name":"ingoo","age":32}'

console.log(person2 === str) // true

const person3 = JSON.parse(person2)
console.log(person3) // Object
