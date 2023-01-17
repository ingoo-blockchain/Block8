# 모듈

## Webpack <- React

## nodejs

-   Commonjs 모듈 require module.exports
-

## module

CommonJS 모듈
require() ,module.exports

ES6,7 모듈

import ... from ...
export default {}

```js
import express from "express"
const express = require("express")

import mysql from "./models/index.js"
const mysql = require("./models/index.js")


module.exports = {...}
export default {}

exports.add = () => { }
export const add = () => {

}


```

class 화면을 표현하는것

1. class 작성하는 능력을 키우기 위함 .
2. React 때 쉬워짐.
3. **디자인패턴** 어느정도는 배울수있게됨.
    - 어떤 어벤저스 급 개발자들이 22가지 여러가지패턴을 다구현할수있다.~
    - 아 디자인패턴이 어떤용도로 사용되는구나

`3일 걸쳐서 Comment`

```js
// 어떤 변수로 조건을 검사하든,
if (boolean) {
}

const test = "web7722"

switch (test) {
    case "web7722":
        break
    case "web":
        break
    case "7722":
        // code block
        console.log("hello")
        break

    case "ingoo":
        break
    case "인구":
        break
    case "hello":
        console.log("world")
        break
    default:
        console.log(null)
        break
}

if (test === "web7722" || test === "web" || test === "7722") {
    console.log("hello")
} else if (test === "ingoo" || test === "인구" || test === "hello") {
    console.log("world")
} else {
    console.log(null)
}

if (test === "web7722") {
} else if (test === "web") {
} else if (test === "7722") {
}

const className = "default"

switch (className) {
    case "default":
        // ...
        break
    case "update":
        // ...
        break
}
```
