# Login 만들기

## express 기본세팅

```sh
npm init -y
npm install express mysql2 sequelize dotenv
```

기본세팅

```
|- config.js
|- app.js
|- server.js
```

models

## router

## TDD

```sh
npm install -D jest node-mocks-http supertest
```

파일명.test.js

package.json

"start":"node server",
"test":"jest"

npm run test

```
describe
it
test
```

단순하게 코드를 실행할 영역을 나눈거에요.

{
const a = 1
}

{
const a = 1
}

```js
describe("controller", () => {
    const service = {}

    it("userController getProfile", () => {
        console.log(service)
    })
})

describe("service", () => {
    const b = 1
})
```

### Authorization

GET / http/1.1
Authorzation : Bearer token
Content-type : application/json

body...

POST / http/1.1
Authorzation : Bearer token
Content-type : application/json

{
subject:'asdf',
content:'asdf',
...
token:
}

**token**
eyJ0cHkiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyaWQiOiJ3ZWI3NzIyIiwidXNlcm5hbWUiOiJpbmdvbyIsInByb3ZpZGVyIjoibG9jYWwiLCJzbnNJZCI6bnVsbH0.XopTI11OSdbdQ36psRszjeRkkrCksPMp7+zACU0SUOs

**payload**
eyJ1c2VyaWQiOiJ3ZWI3NzIyIiwidXNlcm5hbWUiOiJpbmdvbyIsInByb3ZpZGVyIjoibG9jYWwiLCJzbnNJZCI6bnVsbH0

base64 -> utf-8 -> json.parse

```
npm install cookie-parser cors
```
