# NodeJS 내장객체



내장객체를 배우는 이유



브라우저에서 `window` 전역객체 

document 



```javascript
const global = {

	AbortController:class { 
	
	},
    Buffer:class {
        
    },
    __dirname: '',
    __filename: '',
    console: {
        log:function(){}
    },
    module,
    require,
    process

}

console.log()

global.console.log()
```





```javascript
> global
> global.console
> global.module
```



```
module.exports 
```



**1.js**

```javascript
const a = 100
const b = 100

module.exports = {
    name:'ingoo',
    age:32,
    b:b
}


```



**2.js**

```javascript
const a = require('./1.js') // { name:'ingoo', age:32 }
const b = 100
console.log(a)
```



```sh
$ node 2 
```



프로세스는 하나 

변수 공유가 안됨 



**2.js**

```javascript
const a = require('./1.js') // { name:'ingoo', age:32 }
console.log(a)

```



**1.js**

```javascript
const b = require('./2.js')

module.exports = {
    name:'ingoo',
    age:32,
    b:b
}
```



```js
node 2
```





**캐싱**



피보나치 수열 

컴퓨터 입장에선 연산



`메모이제이션`, `메모리`



**3.js**

```javascript
module.exports = {
    a:1,
    b:2,
}
```





**4.js**

```javascript
const data = require('./3.js')
console.log(data)
```





**5.js**

```javascript
// module.exports = {}
console.log(module.exports === exports)

module.exports = {name:'ingoo'}
module.exports.name = 'ingoo'
exports.name = 'ingoo'

exports.name = () => {
    return 'hello world!'
}


```



**__dirname, __filename**

```javascript
// 실행한 경로의 파일명 까지출력
console.log(__filename) // 내파일의 절대경로 출력 

// 실행한 경로까지만 출력 
console.log(__dirname)
```



**7.js**

```javascript
console.log(process)
```





```sh
> echo $name
> export name='ingoo'
> echo $name
```





## 내장모듈 



Buffer

Stream

fs

path



```javascript
require('path')
```



/



## 외장모듈 



apt

brew



인터넷





npm <- nodejs 



**server.js**

```js
```



npm 



```sh
npm init
# package.json 

npm install [패키지명]
npm install express 

# node_modules <-- express


## node_modules 삭제후 사용해보기
npm install


```



express 

nodejs 에서 웹서버를 만들수있는 마이크로프레임워크

프레임워크, 라이브러리 



```
http://localhost:3000
```





