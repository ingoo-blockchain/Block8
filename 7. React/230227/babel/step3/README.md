# Babel 을 통해서 JSX 문법 컴파일 하기

1. 관련 패키지 설치

```sh
$ npm init
$ npm install @babel/core @babel/cli @babel/preset-react
```

2. .babelrc

```json
{
    "presets": ["@babel/preset-react"]
}
```

3. babel 실행

```
$ npx babel app.js --out-file dist/app.js
```
