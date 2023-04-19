# tsconfig.json

```json
{
    "compileOptions": {},
    "include": ["./"],
    "exclude": []
}
```

-   compileOptions : Typescript 파일을 컴파일 진행시 어떤형태로 컴파일을 진행할지 속성정의
-   include : 이부분은 컴파일을 진행할 디렉토리를 지정할수있습니다.
-   exclude : `./src` 컴파일을 진행하고 싶지 않을때 설정하는 속성 .test.ts

```sh
npm init -y
npm install -D typescript

```

## tsconfig.json

```json
{
    "compilerOptions": {
        "outDir": "./dist"
    },
    "include": [],
    "exclude": []
}
```

## src 디렉토리 생성

## src 디렉토리 안에 message.ts 만들기

## include 설정 알아보기

```json
{
    "compilerOptions": {
        "outDir": "./dist"
    },
    "include": ["src/**/*"],
    "exclude": []
}
```

-   \*\* : 디렉토리
-   \* : 파일

## package.json

build 속성 추가

```json
"scripts": {
    "build": "tsc"
},
```

```json
{
    "compilerOptions": {
        "outDir": "./dist"
    },
    "include": ["src/*"],
    "exclude": ["**/*.test.ts"] // 패턴
}
```

## compilerOptions

-   module : 모듈 시스템을어떤걸 사용할지.
-   outDir : 설명안해두되겠져 ?
-   target : 어떤 javascript로 번들링을 할거냐 ex) es5 es6 ...
-   esModuleInterop : import 문법을 바꾸는 행위인데 ex) true
-   strict : true
-   baseUrl : 모듈의 상대경로를 default 설정 ./src
-   paths : `baseUrl` 기준으로 상대위치를 가져오는 매핑값 (마치 경로를 변수처럼 사용한다.)

import \* as react from 'react'

import react from 'react'

/src

/user
/controller
/service
/repostiory

/auth
/controller
/service
/ auth.service.ts

/board
/service
board.service.ts

```ts
import { UserService } from "@user/service/user.service.ts"
```

### tsc-alias

```
npm install -D tsc-alias
```
