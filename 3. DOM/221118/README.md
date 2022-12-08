# 게시판

    화면구성도 그려보기
    게시판 수정 페이지 제작

# 배열함수

```js
const arr2 = [2, 7, 5, 4, 5]
for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i])
}
```

## Array.prototype.forEach()

```js
const arr = [2, 7, 5, 4, 5]
arr.forEach(function (value, index) {
    console.log(value, index)
})

let obj = {
    arr: [2, 7, 5, 4, 5],
    length: 5,
    forEach: function (callback) {
        for (let i = 0; i < obj.length; i++) {
            callback(obj.arr[i], i)
        }
    },
    filter: function (callback) {
        const newArr = []

        for (let i = 0; i < obj.length; i++) {
            const bool = callback(obj.arr[i], i)
            if (bool) {
                newArr.push(obj.arr[i])
            }
        }

        return newArr
    },
}

const newArr = obj.filter((v, i) => {
    return v === 5
})

console.log(newArr)

// obj.forEach(function (value, index) {
//     if (index === 3) return
//     console.log(value, index)
// })
```

```js
const arr = [2, 7, 5, 4, 5]
arr.forEach(function (value, index) {
    if (index === 3) return
    console.log(value, index)
})
```

```js
const arr = [2, 7, 5, 4, 5]
const arr2 = []
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 5) {
        arr2.push(arr[i])
    }
}

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

console.log(arr2) // [5,5]
```

**Array.prototype.filter()**

```js
const arr = [2, 7, 5, 4, 5]
const arr2 = arr.filter((v) => v === 5)
console.log(arr2, arr)
```

# Linux & Git

windows - pdf 파일 참고해서 작업
Mac - iterm2

Windows - Wsl2
OS - Linux

버전 형상관리 툴 - git
Git
GUI , CLI

GUI :
CLI :
