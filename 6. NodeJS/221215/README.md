# Javascript





- 함수 선언과 호출 
- 콜스택
- 스코프  (지역변수, 전역변수 )
- 호이스팅  (실행컨텍스트)
- function <-
- this 
- 클로저
- ... 함수형..  map foreach filter .. 



## 스코프

var ,let : 호이스팅 

- 블록스코프 
- 함수스코프
- 렉시컬스코프 





```javascript
{
    var a = 10
}
console.log(a) // 10

{
    let b = 10
}
console.log(b) // 

for () {
    let i=0; i<10; i++
}
if () {}
function () {
    
}

```



블록스코프는 모든 `{ }` 

함수스코프 함수선언 `{ }`



`var` 함수스코프 

`let const` 블록스코프



```javascript
for(let i=0; i<10; i++) { }
console.log(i) //
var i=0;
for(var i=0; i<10; i++){ }
console.log(i) //
```







```javascript
function main(){
    var i=0
    for(var i=0; i<5; i++){
        setTimeout(()=>{
            console.log(i) // 0 , 1 ,2 ,3 ,4
        },1000*i)
    }
}

main()
 

```



## 렉시컬 스코프 

```javascript


cosnt x = 'x'
function c() {
    const y = 'y'
    console.log('c',y)
}

function a() {
    const x = 'xx'
    console.log('a',x)
    function b() {
        const z = 'z'
        console.log('b',z)
        c()
    }
    b()
}

a()
b()
```





## 호이스팅



실행컨텍스트 생성시 렉시컬 스코프 내의 선언이 끌어 올려지는게 호이스팅이다~



```javascript
var x = 'ingoo'

function inner(){
    console.log(y) 
    var y = 'hello'
}

inner()
```



이 코드 실행 결과 아는가? - yes

실행 컨텍스트를 아는가? - no

렉시컬 스코프를 아는가? - no



**해설**

우리가 배웠던 `call stack` 에 대해서 다시 생각을 해봅시다.

`heep` 이라는 공간과 `call stack` 이라는 공간이 있습니다.

이 javascript가 실행될때.

`Anonymous` 함수가 실행 (익명함수 실행)



익명함수 실행되면서 `선언 부분만 실행시킵니다` 

`heep` 이라는 부분이 실행 컨텍스트 



### 익명함수 실행

**1. x 변수 선언**

```javascript
var x = 'ingoo' // x 라는 변수가 ingoo라는 값을 가지고 있다.
```





**2. inner 함수 선언**

```
function inner() {
	var x = 'hello'
	console.log(x)
}
```



**3. inner() 호출**

```javascript
inner()
```





### 콜스택

```
inner()
Anonymous()
```



```javascript
{
	var x = 'hello'
	console.log(x)
}
```



**실행컨텍스트**

```
0001 x ingoo
0002 inner { }
0003 x hello



0002 inner {
	0001 x hello
}
0001 x ingoo
```





```
let x = 'ingoo'

function inner(){
    console.log(y) // 
    let y = 'hello'
}

inner()
```



`var` `function` 





```javascript
inner()
function inner(){
    console.log('정상적으로 작동!')
}
```





**문제 1.**

```javascript
function inner(){
	console.log(x)
}

var x = 'ingoo'
inner()

```



**문제 2. (TDZ)**

```javascript
inner()
function inner() {
	console.log(x)
	let x = 'hello'
}

var x = 'ingoo'

/*Uncaught ReferenceError: Cannot access 'x' before initialization*/

// Uncaught ReferenceError: x is not defined
```



**문제 3.**

```javascript
inner()
function inner() {
    x = 'hello'
    console.log(x) // hello
}

console.log(x) // hello
```



**문제 4.**

```javascript
inner()
function inner() {
	x = 'hello'
	console.log(x)
}

var x = 'ingoo'
console.log(x)
```





```javascript
let x = 'ingoo'
 
function inner() {
    let x = 'hello'
    console.log(x)
}

console.log(x)
```





## This 가 어려운이유



function 키워드는 하는 역활이 너무많아요.



```javascript
// 일반함수 ()=>{ }
function Foo(a,b) {
    console.log(this)
    return [a,b]
}

const a = Foo(1,2) 
console.log(a) // [1,2]
```



```javascript
// 생성자 함수 class
function Foo(a,b) {
    // this = {}
    console.log(this)
    this.arr = [a,b]
    // return this
}

const a = new Foo(1,2)
console.log(a)

console.dir(Foo)
```



```javascript
// 객체 메서드
function Foo(a,b) {
    console.log(this)
    return [a,b]
}

const bar = {
    method:Foo
}
bar.method(5,6) // [5,6]
```



function 으로 선언한 함수가 상황에 따라 `this` 가 바뀐다.



function 키워드는 `this binding` 이라는 것이 작동되기때문.





### this binding 



function 이라는 키워드로 함수를 선언하면

this라는것을 바꿀수있다.



- bind
- call
- apply 



- Function.prototype.bind



```javascript
function Foo(a,b) {
	console.log(this)
	return [a,b]
}

const fooBind = Foo.bind({ name:'ingoo' }) // Function
fooBind(1,2) // [1,2]

```



Foo 라는 함수를 선언하고 

fooBind 라는 변수에 Foo.bind 메서드를 호출해서 this를 바꾼 Foo함수값를 리턴해줍니다. 



- Function.prototype.call
- Function.prototype.apply

```javascript
function Foo(a,b) {
    console.log(this)
    return [a,b]
}

// 1: this값 
Foo.call({name:'ingoo'},1,2)
Foo.apply({name:'ingoo'}, [3,4])
```





## ES6



- 일반함수 -> Arrow function

- 생성자함수 -> class

- 객체 메서드 -> 메서드 축약형 

  



#### 객체 메서드



**ES5**

```javascript
// 객체 메서드
let bar = {
    method:function (a,b) { // binding , 생성자도있어.
        console.log(this)
    	return [a,b]
    }
}
bar.method(5,6) // [5,6]
```



**ES6**

```javascript
let bar = {
	name:'web7722',
    method(a,b){ // binding 은됨. 생성자가없음.
        console.log(this)
        return [a,b]
    }
}

bar.method(1,2) // [1,2]
```





### 생성자 함수



**ES5**

```javascript
function Foo(a, b) {
    console.log(this)
    this.arr = [a,b]
}

Foo.prototype.getArr = function() { // true
    return this.arr
}
                
const foo = new Foo(1,2) // { arr:[1,2], getArr:()=>{ return this.arr } }




```



**ES6**

```javascript
class Foo {
	constructor(a, b){
        // this = {}
		this.arr = [a,b]
        // return this
	}
	
	getArr(){ // false 
        return this.arr
    }
}

const a = new Foo()
```



`property descriptor` 속성 

- enumerable : true, false 



iterable , iterator 





this는.. 실행될때.. 결정됨..

그리고 function 키워드.. 안댐..

ES6 사용해서 해야 직관적임 

