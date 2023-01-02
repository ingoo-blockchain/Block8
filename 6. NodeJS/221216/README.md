# Javascript 



## 클로저

```javascript
function main() {
    for(var i=0; i<5; i++){
        setTimeout(()=>{
            console.log(i)
        },1000*i)
    }
}

main()
```



실행컨텍스트,  스코프 , 이벤트루프 



## 해결법이 var -> let

## 즉시함수 



```javascript
function main() {
    for(var i =0; i<5; i++) {
        ;((j)=>{
            setTimeout(()=>{
                console.log(j)
            },1000*j)
        })(i)
    }
}

main()


function a(){
    let txt = 'hello world!'
    
    return () => {
        console.log(txt)
    }
}

const point = a()
console.log(point)


const clickHanlder = (i) => {
    const num = i + 1
    
    return (e) => {
        console.log(num)
    }
}

area.addEventListener('click', clickHandler()) 

console.log(num)





```



**연습문제**

```javascript
function inner() {
    let count = 0 // 4
    function outer(){
        count++
        return count // 4
    }
    
    return outer
}

const counter = inner() // outer 함수 값 
counter()
counter()
counter()
const a = counter()
console.log(a)  // 4
```



**연습문제**

```javascript
const add = (a) => ++a

function add(a,b){
    return ++a
}
```



```javascript
// Counter 함수 표현식으로 함수를 선언 
const Counter = type => { // type === (type) 매개변수가 type이라는 뜻.
	let count = 0 // Counter 함수안에서 count 라는 변수를 선언 
	const increment = () => ++count	// Counter 함수 안에 있는 count변수를 증가시키는 
    const decrement = () => --count // Counter 함수 안에 있는 count변수를 감소시키는 
    
    //if(type === 'increment') {
    //    return increment
    //} else {
    //    return decrement 
    //}
    
    return type === 'increment'
    ? increment
    : decrement
}

  
const increment = Counter('increment') //  () => ++count
const decrement = Counter('decremnet') //  () => --count

increment() // 1
increment() // 2
increment() // 3
decrement() // -1
decrement() // -2
const result = increment() // 4
console.log( result )


```





```javascript
const Counter = type => { // type === (type) 매개변수가 type이라는 뜻.
	let count = 0 // Counter 함수안에서 count 라는 변수를 선언 
    //return [ () => ++count, () => --count ]
    return {
        increment:()=>++count,
        decrement:()=>--count,
    }
}

const CounterFn = Counter() // Object { increment:()=>{}, decrement:()=>{} }
const incre = CounterFn['increment']
const decre = CounterFn['decrement']



const {decrement, increment} = Counter() 
increment()
increment()
increment()
decrement()
decrement()
const result = increment()
console.log(result)

function find(obj){
    const {a,b,c,d,e,f,g} = obj
}

find({g:'a',a:'dd' })
```





```javascript
// function array function 

const a = 10
const add10 = _ => _ + 10 
add10(a) // 20 

const add20 = $ => $ + 10
add20(a)

const f1 = () => () => 1
const f1 = (count=0) => [()=>++count,()=>--count]


// 함수는 값 Javascript 

/*
function inner() {
	let count = 0
  
    return function (){
        count++
        return count // 4
    }
}
*/

const make = (count) => () => ++count



```









