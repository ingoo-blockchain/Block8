# 객체

## 메서드

**함수**

```js
function showMesage() {}
const showMessage = function () {}
const showMessage = () => {}
```

**메서드(method)**

```js
const user = {
    name:'곽인구'
    sum:function(a,b){
        return a+b
    }
}

user.sum(1,2) // 3
```

**this**

```js
const user = {
    name: "곽인구",
    sayHi: function () {
        console.log(this.name + "님 안녕하세요.")
    },
}

user.sayHi()
```

**getter 와 setter**

get , set 이라는 키워드가 숨겨져있습니다.

```js
const user = {
    name:''
    lastName:'',
    firstName:'',
    set name(){

    },
    get name(){

    }
}

user.name = '곽인구'
```

# 생성자 함수

객체 틀을 만드는 함수가 존재합니다.

```js
// 가상 , 실체
function user(_name, _lastName, _firstName, _age) {
    return {
        name: _name,
        lastName: _lastName,
        firstName: _firstName,
        age: _age,
    }
}

const ingoo = user("곽인구", "곽", "인구", 32)
const 준영 = user("장준영", "장", "준영", 28)
const 배열 = [ingoo, 준영]
```

**생성자 함수**
_생성자_

```js
function User(name, age) {
    this.name = name
    this.age = age
}

const 인구 = new User("곽인구", 32)
```

```js
class User {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

const 인구 = new User("곽인구", 32)
```
