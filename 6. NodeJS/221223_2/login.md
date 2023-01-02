```sh

npm install express nunjucks mysql2 cookie-parser
```

router -> controller -> service -> repository -> db

## 1.라우팅을 완벽하게 구현하세요.

GET /

GET /user/login
GET /user/logout
GET /user/join

GET /board/list

## 2. GET 을 완성시키세요. (화면을 만들어주세요.)

## 3. DB 확인

SELECT \* FROM user WHERE user_id='web7722' and user_pw='1234';

## 4. repository 구현 및 테스트

```js
findOne()
const obj = {
    where: {
        user_id: "web7722",
        user_pw: "123",
    },
}
```

## 5. service 구현 및 테스트

repository 구현완료 및 테스트

## 6. controller service 장착
