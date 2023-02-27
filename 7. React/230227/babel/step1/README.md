# Babel

Javascript 코드를 변환해주는 도구
Javascript 를 컴파일해주는 도구

1. Javascript 문법은 꾸준히 진화

Javascript 문법이 진화하면, 런타임
ES6 -> ES5 let const
var

이렇게 babel을 통해서 문법을 쉽게 고칠수있다.

2. Javascript 를 실행하는 방법이 여러가지이기 때문

브라우저

-   window

NodeJS

-   global
-   require
-   module

```js
//a.js
const text = "hello world"

//b.js
console.log(text)
```

commonjs - require
es6 - import

babel

개발자 import 문으로 코드를 작성 -> require

1. ES6->ES5
2. import -> require

## Babel 기본 사용

Babel 은 기본적으로 JS 로 구성되어있고, npm을 통해 쉽게 설치가 가능

1. 기본 구성 설치하기

```sh
$ npm init -y
$ npm install @babel/core @babel/cli @babel/preset-env
```

2. babel 환경 구성
   .babelrc 파일 생성

> rc Run Commands Run Controll

```json
{
    "presets": ["@babel/preset-env"]
}
```

3. ES6 예제문법 파일 만들기

4. babel 실행시키기

```sh
npx babel [바꿀파일] --out-file [보낼파일]

npx babel example.js --out-file dist/example.js
```
