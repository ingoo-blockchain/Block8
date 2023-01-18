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
