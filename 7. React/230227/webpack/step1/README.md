# webpack 기본 실행

1. 관련 패키지 설치

```
$ npm init -y
$ npm install webpack webpack-cli
```

2. 프로젝트 구성

src 안에있는 파일을 번들링 진행할려고 합니다.

3. webpack 설정 파일
   **webpack.config.js**

```js
const path = require("path")

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "dist"),
    },
}
```

4. 예제 코드 작성하기

**index.js**

```js
const home = require("./pages/home.js")

console.log(home.name)
```

**pages/home.js**

```js
module.exports = {
    name: "web7722",
}
```

5. 웹팩을 실행시키기

```
$ npx webpack
```
