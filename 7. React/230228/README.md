# Webpack

1. 기본 웹팩 되는지 Test
    1. 디렉토리 파일생성
    2. 관련패키지 설치 webpack webpack-cli react react-dom
    3. webpack.config.js
    4. npx webpack
2. HtmlTemplate
    1. 관련패키지를 설치 html-webpack-plugin
    2. webpack.config.js 수정
3. Babel
    1. 관련패키지 설치 @babel/core @babel/preset-env @babel/preset-react babel-loader
4. hot reloading
    1. 관련패키지 설치 webpack-dev-server
    2. webpack.config.js 수정
        - devServer
    3. package.json 
        - "start": "webpack serve --open --hot"


package.json

scripts: {
    "start": "webpack",
    "dev": "babel index.jsx --out-file dist/index.jsx"
}

npx webpack serve --open --hot


```
|-- dist : front 코드들이 번들링된 파일 - 정적파일들
|-- src : front 관련된 code 
|-- serve
|---- server.js 

```


# React Code 

리액트 사용해서 Front 화면을 만들수있는 수준을 만들어야합니다. 
Class Component -> Hook 
함수형 컴포넌트 

상태를 관리하지 못했습니다 .


```js
const square = (props) => {
    return <div>...</div>
}


class App extends Copmonent {

}
```

useState
useEffect 
