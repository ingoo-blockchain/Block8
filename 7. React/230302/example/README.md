# Webpack 설정

npm install
webpack webpack-cli @babel/core @babel/preset-env @babel/preset-react babel-loader
html-webpack-plugin webpack-dev-server

npm install -D webpack webpack-cli @babel/core @babel/preset-env @babel/preset-react babel-loader

npm install -D html-webpack-plugin webpack-dev-server

npm install -g

node_modules <--
C:\Users\pc-007\Documents\block8\7. React\230302\example

npm install -g

Nodejs <-- node_modules <--

1. nodejs -> node_moduels
2. 프로젝트 내에 있는 node_moduels

const react = require('react')

# React

```
npm install react react-dom axios
```

## CSS

인라인스타일

```
npm install style-loader css-loader
```

-   style-loader
    HTML에 `<style>`
    index.css
    index.html

```
<style>
    .background:red;
</style>
```

bundle.js

## CSS-Loader

```sh
npm install mini-css-extract-plugin
```

## Styled-Components

css-in-js

```
npm install styled-components
```

## process.env

```sh
$ npm install process
```

```js
const webpack = require('webpack')

// webpack plugin
new webpack.ProvidePlugin({
    process: "process/browser",
}),
```

## polished

```sh
npm install polished
```

## 오늘 배운것

-   useRef
-   React 에서 CSS 처리하는 방법

    -   CSS-loader
    -   Style-loader

        -   css module
        -   styled-compoenents
            -   webpack

    -   커스텀훅

내일
Comment -> Styled-Component , 커스텀 훅

-   앞으로는 이제 CRA
    -   커스텀훅
    -   styled-component
    -   router Comment -> Board
    -   index.js
