# TCP - L4 

# L5~L7 프로토콜
- string 조작
- 확장성 고려 
    - Javascript 문법....
    - 자유자재로 변수타입을 유추할수있고, 원하는대로 데이터를 만든것. 


```js
const str = '1 2 3 4 5 6 7'
// [1,2,3,4,5,6,7]
/*
1
2
3
4
5
6
7
*/
```

```js
const str = '1 2 3 4 5 6 7'
//{"0":1,"1":2,"3":3...}
```


```js
// 메시지 부분

내용
답장
연결형태

'내용 true true'.split(" ")
'내용,true,true'.split(" ")
'내용 true true'.indexOf('true')

`content:내용
reply:true
connection:true
`
`content:내용,reply:true,connection:true`

[content:내용, reply:true, connection:true]
[[content,내용], [reply,true], [connection:true]]
[{content:내용}, {reply:true}, {connection:true}]

const a = {content:내용, reply:true, connection:true}
a.connection //
a.content
a.reply
```

1 에서 100까지 출력하세요
3의 배수일땐 Fizz
5의 배수일때 Buzz
3의 배수면서, 5의 배수일때는 FizzBuzz 을 출력하세요.

1
2
fizz
4
buzz
fizz



답변여부
내용타입
내용길이

실제내용

### reqeust message

reply:true
content-type:string
content-length:10

Hello world!!!!


### response message

reply:true
content-type:string
content-length:10
Connection:alive | close

hello world222222


**lib/req.js**



**lib/res.js**