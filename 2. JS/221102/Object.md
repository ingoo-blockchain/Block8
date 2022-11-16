# 객체

객체는 자바스크립트를 잘다루기 위해 꼭 알아야할
`데이터` 입니다.

`데이터타입` 원시형 객체형으로 두가지를 분리하여
설명한적이 있음.

-   원시형

    -   문자형
    -   숫자형
    -   불리언
    -   undefiend
    -   null
        ....

-   객체형 ( 참조형 )
    -   배열
    -   객체
        ....

## 객체어떻게 생겨먹은건가

객체를 만드는방법 ( 문법 )

```js
// new 키워드를 사용해서 객체를 생성하는 방법
// 객체 생성자 문법
const user = new Object()
console.log(user)

// `{}` 활용해서 객체를 생성하는 방법
// 객체 리터럴 문법
const user = {}
console.log(user)
```

                    [  리스트  ]

변수하나에 여러가지 데이터를 담고싶을때 사용하는게
`배열` 이다.

                    [ 사물 상세정보 ]

변수하나에 여러가지 데이터를 담고싶을때 사용하는게
`객체` 이다.

Q. 그럼 왜씀?
반전체 학생리스트

```js
const students = ["곽인구", "강찬수", "김건영", "김성희", "김주형"]
```

배열에 학생리스트를 담는다면,
총 학생 숫자도 구하기쉽죠,
하나의 변수에 관리하다보니 좋다.

그 학생 한명의 정보를 저장하기 위해서는
배열로는 한계가 느껴진다

학생 한명의 정보를 저장하기위해서 사용하는
`데이터타입` 바로 `객체` 이다.

> 객체는 사람, 주문, 에어컨 등 실제 존재하는 개체를 표현할떄 적합함.

```js
const Person = {
    name: "곽인구",
    age: 32,
}
```

이 문법! 어디서 많이본 문법입니다.
`CSS` 많이 비슷하다는점.

변수 `Person` 안에서
_name_ 속성에는 `곽인구` 값을 입력함
_age_ 속성에는 `32` 값을 입력했습니다.

`데이터타입` 어떠한 것이든 들어올수있다.
String, Number, Boolean, Function, Array,
Object

객체또한 변수하나에 여러가지 값이 있다보니.
특정 값만 뽑아올수 있어야합니다.

객체안에 있는 `name` console.log를 찍고싶다면
어떻게 하는지.

```js
console.log(Person.name)
```

> 위 와 같은 방법을 `점 표기법` 이라고 합니다.

```js
const console = {
    log: function () {
        console.log("hello world!")
    },
}

console.log()
```

미리 알면 좋은것들이
속성 특수문자가 들어갈 경우가 있습니다.
띄어쓰고 - \_ $...
`-` , `띄어쓰기` 정도가 있습니다.
이럴 경우 양쪽끝에 `""` 나 `''` 을 넣습니다.
대부분 큰따옴표 를 써요..

```javascript
const Person = {
    name: "곽인구",
    age: 32,
    "Content-type": "text/javascript",
}

console.log(Person)
```

만약 속성에 특수문자가 들어갈 경우에
속성 값을 뽑고 싶다면.
`점 표기법`이 아닌 `[ ] 대괄호 표기법`

```js
Person["Content-type"]
```

응용방법이 "Content-type" 내용을 담고있는 변수를
만든다음에 변수를 넣어주셔도 됩니다.

```js
let contentType = "Content-type"
Person[contentType]
```

목적은 객체안에있는 `속성이름` 알아내는 방법
`in 연산자`

```js
const Person = {
    name: "곽인구",
    age: 32,
    "Content-type": "text/javascript",
}

"name" in Person // Boolean
```

**for in 문**
객체내용을 반복문을 통해 안에있는 정보를 다 보고싶을때.

```js
for (let key in 객체) {
    console.log(key)
}

for (let key in Person) {
    console.log(key)
    console.log(Person[key])
}
```


### Spread Operator (스프레드 연산자)

... 
