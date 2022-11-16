// // const user = {
// //     name: "곽 인구",
// //     firstName: "",
// //     lastName: "",
// //     age: 32,
// //     sayHi: function () {
// //         console.log(this.name + "님 안녕하세요.")
// //     },
// //     // setter
// //     setName: function () {
// //         const arr = this.name.split("") // [곽,인구]
// //         this.lastName = arr[0]
// //         this.firstName = arr[1] + arr[2]
// //     },
// //     // getter
// // }

// // let txt = "곽인구"
// // let arr = txt.split("")
// // console.log(arr)

// // // console.log(user)
// // // user.setFirstName()
// // // console.log(user)

// // // 곽인구
// // // 첫글자 하나가 lastName
// // // 두번쨰부터 끝까지가 firstName
// // // 글자를 자를수있어야함

// // // 메서드를 많이 아셔야합니다.
// // // let str = " 자바스크립트 "
// // // // String
// // // console.log(str.length)
// // // console.log(str)
// // // console.log(str.trim())
// // // // 찾아바꾸기
// // // // STRING.repalce(찾을단어, 바꿀값)

// // // const replaceText = str.replace("스크립트", "")
// // // console.log(replaceText)

// // // let nm = "곽 인구" // 4
// // // let arr = nm.split(" ") // ["곽","인구"]
// // // console.log(nm)
// // // console.log(arr.length)
// // // console.log(arr[0])
// // // console.log(arr[1])

// // // 곽 인구
// // // 구분자를 통해서
// // // 글자를 나누고싶을떄 사용하는 메서드
// // // let x = "1.2.3.4.5.6.7.8.9"
// // // let y = [1,2,3,4,5,6,7,8,9]
// // // let x = "1.2.3.4.5.6.7.8.9"
// // // console.log(x)
// // // const y = x.split(".")
// // // console.log(y)
// // // console.log(y[8])
// // name

const user = {
    name: "",
    lastName: "",
    firstName: "",
    set _name(value) {
        const arr = value.split("") // ["곽","인","구"]
        this.name = value
        this.lastName = arr[0]
        this.firstName = arr[1] + arr[2]
    },
    get _name() {
        return this.firstName + " " + this.lastName
    },
}

// user._name = "곽인구"

// console.log(user._name)

// // 010-8955-7722

// // tel1:010
// // tel2:8955
// // tel3:7722

// function user(_name, _lastName, _firstName, _age) {
//     return {
//         name: _name,
//         lastName: _lastName,
//         firstName: _firstName,
//         age: _age,
//     }
// }

// const ingoo = user("곽인구", "곽", "인구", 32)
// const 준영 = user("장준영", "장", "준영", 28)
// const 배열 = [ingoo, 준영]

// function User(name, age) {
//     this = {}
//     this.name = name
//     this.age = age
//     return this
// }

// // 인스턴스 생성했어?
// // 너 붕어빵틀로 붕어빵 만들었어?

// const 인구 = new User("곽인구", 32)
// const 준영 = new User("장준영", 28)

class User {
    // 생성자
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

const 인구 = new User("곽인구", 32)
const 준영 = new User("장준영", 28)

