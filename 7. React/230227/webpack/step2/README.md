# Webpack Loaders 사용해보기

Webpack 설정파일에 있는 Loaders 설정내용은
다양한 유형의 파일을 모듈할수있다.

아마 우리가 자주사용하는것들은
CSS, Image 일 확률이 높다.

CSS 모듈을 번들링을 해보도록 하겠습니다.

1. 관련 패키지 설치

```sh
npm init -y
npm install webpack webpack-cli css-loader style-loader
```

2. 프로젝트 구성

src

**src/index.js**

```js
import "./index.css"

console.log("hello world")
```

**src/index.css**

```css
* {
    margin: 0;
    padding: 0;
    background: red;
}
```

3. webpack.config.js 설정

```js
const path = require("path")

module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "dist"),
    },
}
```
