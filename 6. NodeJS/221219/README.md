# Nodejs, Express 게시판 구현

DBMS 데이터 베이스 X

1. express 기본 설명
2. 게시판 형태



## express 기본세팅


### Server 대기상태 
```sh
npm init -y  #package.json
npm install express

#server.js 파일생성 및 실행
node server
```

### 템플릿 엔진 설정

express 제공 X 

```sh
npm install nunjucks 
```

### 정적파일 미들웨어 생성
express 기본적으로 제공

```
app.use(express.ststic('public'))
```

### bodyParser
req 객체에 body를 객체화를 해주지않음.

요청 바디를 객체화
```js 

app.use(express)
```