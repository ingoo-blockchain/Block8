# Sequelize

Express 기본세팅
Sequelize 기본세팅

```sh
npm init -y
npm install express cors
npm install mysql2 sequelize
npm install dotenv
```

## Server.js

```js
const express = require("express")
const app = express()

app.listen(3000, () => {
    console.log(`server start`)
})
```

## config.js

```js
require("dotenv").config()

const config = {
    env: process.env.NODE_ENV || "development",
    port: process.env.PORT || 3000,
    db: {
        development: {
            username: process.env.DB_USER || "",
            password: process.env.DB_PASSWORD || "",
            database: process.env.DB_DATABASE || "",
            port: process.env.DB_PORT || "",
            host: process.env.DB_HOST || "",
            dialect: "mysql",
        },
    },
}

module.exports = config
```

## .env

```js
PORT=3000
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=ingoo
DB_PASSWORD=ingoo
DB_DATABASE=comments
NODE_ENV=development
```

백앤드 서버를 만들때

-   기획
-   데이터베이스 테이블 설계
-   API 문서
-   작성가능

## Sequelize 세팅

1. Models 디렉토리 생성

    - DB Connection 관련된 파일 ( index.js )
    - Model 에 대한 파일들.
        - Model ? Table에있는 field 내용을 객체로 표현한것들.
        - 1:N

2. Sequelize-cli
    - sequelize init

**create**

```
Comment {
  dataValues: {
    id: 1,
    userid: 'web7722',
    content: 'hello hello world~~',
    updatedAt: 2023-01-11T03:29:03.979Z,
    createdAt: 2023-01-11T03:29:03.979Z
  },
  _previousDataValues: {
    userid: 'web7722',
    content: 'hello hello world~~',
    id: 1,
    createdAt: 2023-01-11T03:29:03.979Z,
    updatedAt: 2023-01-11T03:29:03.979Z
  },
  uniqno: 1,
  _changed: Set(0) {},
  _options: {
    isNewRecord: true,
    _schema: null,
    _schemaDelimiter: '',
    attributes: undefined,
    include: undefined,
    raw: undefined,
    silent: undefined
  },
  isNewRecord: false
}
```

**fineAll**

```
[
  Comment {
    dataValues: {
      id: 1,
      userid: 'web7722',
      content: 'hello hello world~~',
      createdAt: 2023-01-11T03:34:18.000Z,
      updatedAt: 2023-01-11T03:34:18.000Z
    },
    _previousDataValues: {
      id: 1,
      userid: 'web7722',
      content: 'hello hello world~~',
      createdAt: 2023-01-11T03:34:18.000Z,
      updatedAt: 2023-01-11T03:34:18.000Z
    },
    uniqno: 1,
    _changed: Set(0) {},
    _options: {
      isNewRecord: false,
      _schema: null,
      _schemaDelimiter: '',
      raw: true,
      attributes: [Array]
    },
    isNewRecord: false
  },
  Comment {
    dataValues: {
      id: 1,
      userid: 'web7722',
      content: 'hello hello world~~',
      createdAt: 2023-01-11T03:34:18.000Z,
      updatedAt: 2023-01-11T03:34:18.000Z
    },
    _previousDataValues: {
      id: 1,
      userid: 'web7722',
      content: 'hello hello world~~',
      createdAt: 2023-01-11T03:34:18.000Z,
      updatedAt: 2023-01-11T03:34:18.000Z
    },
    uniqno: 1,
    _changed: Set(0) {},
    _options: {
      isNewRecord: false,
      _schema: null,
      _schemaDelimiter: '',
      raw: true,
      attributes: [Array]
    },
    isNewRecord: false
  }
]
```

**findOne**

```
Comment {
  dataValues: {
    id: 1,
    userid: 'web7722',
    content: 'hello hello world~~',
    createdAt: 2023-01-11T03:37:30.000Z,
    updatedAt: 2023-01-11T03:37:30.000Z
  },
  _previousDataValues: {
    id: 1,
    userid: 'web7722',
    content: 'hello hello world~~',
    createdAt: 2023-01-11T03:37:30.000Z,
    updatedAt: 2023-01-11T03:37:30.000Z
  },
  uniqno: 1,
  _changed: Set(0) {},
  _options: {
    isNewRecord: false,
    _schema: null,
    _schemaDelimiter: '',
    raw: true,
    attributes: [ 'id', 'userid', 'content', 'createdAt', 'updatedAt' ]
  },
  isNewRecord: false
}
```
