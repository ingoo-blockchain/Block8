# Webpack Plugin

HTML template 만드는 것을

1. 관련 패키지 설치

```sh
$ npm init -y
$ npm install webpack webpack-cli html-webpack-plugin
```

2. 디렉토리 구성

src/index.html

src/index.js

3. webpack.config.js

4. 실행

```sh
npx webpack
```

## React 프로젝트 디렉토리를 구성

> 아주 간단한 내용이니깐 실제로 사용하기에는 조금 부족할수있습니다.

```sh
npm install react react-dom
```

## babel

.babelrc

```json
{
    "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

관련패키지 설치

```sh
npm install @babel/preset-env @babel/preset-react
```

```sh
npm install @babel/core babel-loader
```
