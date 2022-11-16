# setTimeout , setInterval

```js
window.setTimeout
```

**문법**

```js
window.setTimeout(callback, 1000)
callback:function -> 실행할 함수
1000:number -> 시간

window.setInterval(callback, 1000)
callback:function -> 실행할 함수
1000:number - > 시간
```

## setTimeout

2번째 인자값인 number 즉 밀리세컨드
가 충족되었을때.
딱 한번만 실행합니다.

## setInterval

2번째 인자값인 number 즉 밀리세컨드
가 충족되었을때 마다 실행합니다.

### 싱글스레드

프로그램을 해석하는 사람이 한명이다.

### Event loop

프로미스 객체
async/await

### 동기 와 비동기

부모님께서 심부름을 시킴..

쓰레드

빨래돌리고 끝나는시점.
빨래널고
정육점가서 소고기 사와

# setInterval 을 활용하여 visual 만들기

setInterval 을 활용해여 1초마다 on을 이동시켜주자 ?? 어떻게 ?

querySelector()
Element.className.. ?

setInterval 을 사용할때.
매초마다 실행되는데

처음돌떄 - 첫번쨰 엘리먼트
두번쨰돌때 - 두번째 엘리먼트
세번째돌때 - 세번쨰 엘리먼트
네번째돌때
다섯번째돌때

setInterval 처음돌떄와 두번째돌떄를..어떻게 확인하는가?
