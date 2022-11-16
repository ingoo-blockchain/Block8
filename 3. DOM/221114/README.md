# Javascript

무엇을 만들때 순서 정의

`array` , `object`

1. array , object
    - 반복문
    - 조건문

로또만드는데.

1. 배열에다가 6개숫자를 중복되지않게 뽑기.

내가 랜덤을 뽑은 숫자가 기존에 뽑았던 숫자와 같은게 있는지
체크하는것이 어려웠음.

내가 뽑은숫자가 무저건 중복되지않는거라면 쉽지않을까 ?

```js
let lotto = []
let lottoArr = []
for (let i = 0; i < 45; i++) {
    lottoArr.push(i + 1)
}

let index = Math.floor(Math.random() * lottoArr.length) // 0~44

lotto.push(lottoArr[index])
lottoArr.splice(index, 1) // 0~43

let index2 = Math.floor(Math.random() * lottoArr.length) // 0~43

lotto.push(lottoArr[index2])
lottoArr.splice(index2, 1)
```

## 로또 번호 생성 배열 만들기

## 배열에 있는 숫자를 정렬알고리즘 (반복문)
