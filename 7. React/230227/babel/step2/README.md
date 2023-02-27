# babel을 통해 express 를 import 로 사용하기

1. 관련 패키지 설치

```sh
$ npm install @babel/core @babel/cli
$ npm install @babel/plugin-transform-modules-commonjs
```

2. .babelrc 설정하기

```json
{
    "plugins": ["@babel/plugin-transform-modules-commonjs"]
}
```

3. babel 실행시킥

```sh

$ npx babel server.js --out-file dist/server.js
```
