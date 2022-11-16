# 날짜 - Date 객체 다루기

Javascript 기본적으로 내장되어있는
생성자 함수입니다.

```js
new Date() // 현재날짜 출력
```

인자값이 1개 `데이터타입` number일 경우

```js
// milliseconds (1/1000)
new Date(1000) // UTC 1970 01 01 00:00:00
// Thu Jan 01 1970 09:00:00 GMT+0900 (한국 표준시)
```

```js
new Date(24 * 3600 * 1000)
```

인자값이 1개 `데이터타입` string일 경우

```js
new Date("2022-11-02")
```

인자값이 N개 `데이터타입` number 일 경우

```js
// 년 월-1 일 시 분 초
const dt = new Date("2022-11-02")

dt.getFullYear()
dt.getMonth() // +1 0~11
dt.getDate() //
dt.getDay() //
// 일요일~토요일 0~6
```
