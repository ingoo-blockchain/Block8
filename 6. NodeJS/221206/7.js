// console.log(process) //

// 변수, 시스템변수
// OS 변수 
console.log(process.env.name) // $

// NODE_ENV 
const ip = process.env.NODE_ENV === 'development' ? 'a' : 'b'

