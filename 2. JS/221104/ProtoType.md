# Javascript는 뭐떄문에 ProtoType인가..

Prototype 객체지향과 반대에요.
객체지향 기준으로 설명을하다

# 객체지향 프로그래밍

서양 의 세계관 가지고있음.
이분법? 사고 /

추상적 / 구체적

마우스 이미지를 그리면 각각다르지만
마우스라는 특정 기능, 속성은 모두다 같을거에요

`Chair` 추상적
`a chair` 구체적 `chairs`

```js
class Chair {
    this.앉을수있는가 : true || false
}

const myChair = new Chair()
```

실체 만드는 행위를 `인스턴스`
추상 만드는 행위를 `class` 만든다

## 분류

회원가입
어떤 정보를 받지..?
userid
userpw
username
userage

```js
class Chair {
    // 속성
    //
}
```

장점 설계하듯이 코드를 작성할수있따
바텀-업 방식이라서.

단점 생산성 낮져

객체지향

## Prototype

분류 나누는거 `귀챃다` `어렵다`
NCS 분류코드

추상적 -> 실체 만드게 아니라.
나와있는걸 가지고
`예술`
그림 , 춤 어떻게 분류할래?

**객체지향**

```js
class 새 {
    constructor() {
        this.날개갯수 = 2
        this.날수있나 = true
    }
}

//     자식         부모
class 비둘기 extends 새 {
    constructor() {}
}
```

**prototype**

```js
function 비둘기() {
    this.날개갯수 = 2
    this.날수있나 = true
}

const 닭둘기 = new 비둘기()

function 참새() {
    this.크기 = "작다"
}

참새.prototype = 닭둘기 // 인스턴스 된거에서부터
const 귀여운참새 = new 참새()
console.log(귀여운참새)

// 객체지향 : 분류를 확실하게 해라
// 프로토타입 : 분류를 하면서 정해라
//              왜냐하면 사람마다 다르지않냐.
```

## 어휘적 범위

실체, 의미 인스턴스 된것들!
js 는 실행됬을때 결정되는것이 많다.
`호이스팅`

```js
var name = "ingoo"
function init() {
    var name = "곽인구"
    function displayName() {
        console.log(name)
    }
    displayName()
}

init()

// var function
// 실행될때 결정되는것이 많습니다.
// 호이스팅
// 실행 컨텍스트 생성시 렉시컬 스코프
// 내에 선언이 끌어올려 지는게 호이스팅

// 우리 호이스팅 안나게 할거다~
```

## this

this 뒤죽박죽 패턴은 존재해여
this 도 실행될떄 결정됩니다.

## 결론

최근 자바스크립트 스펙
`class` `arrow function` `let` `const` 등
prototype 을 망치는 행위는 맞아요

객체지향처럼 사용하고싶어합니다.
`객체지향`

javascript 객체지향 X

prototype ...
하지만 코딩 스타일은 객체지향처럼.


객체지향 

학교소개
    인사말
    역현
    교직원
    시설
    오시는길


```js
class 학교소개 {

}

class 오시는길 extends 학교소개 {

}


```


프로토타입 

```js
function 오시는길(){
    this.name = '오시는길'
}

const a = new 오시는길()


function 학교소개(){

}

학교소개.prototype = 오시는길 
```
