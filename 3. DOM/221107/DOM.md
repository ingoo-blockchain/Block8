# DOM

**Javscript**
**DOM**



> Javscript로 HTML을 조작하는 기능을 `브라우저` 구현한것



javascript 로 브라우저 조작하는거 만듬!!
Web APIs (Application Programming interface)



-   DOM : Document Object Model
-   BOM : Browser Object Model



**HTML**

```html
<span>span2</span>
<h2 id="DOM-title">
    DOM
    <span class="sp">span1</span>
    <span class="sp">span1</span>
    <span class="sp">span1</span>
</h2
```





**CSS**

```css
span {
}

.sp {
}

#DOM-title > span {
}
```



**Javascript**

```javascript
console.log(this) // result : window ...
console.log(window) 
console.log(this === window) // true

// widnow
// - console.log()
// - alert()
// - prompt()

// # DOM


// window.document 
// widnow 생략이 가능하다.

console.log(document) 
// 안에 나오는 메서드들 사용할줄알면 된다.


getElementById()
getElementsByTagName()
getElementsByClassName()

```



## window.document.getElementById()



**복수선택이 안됨!**



getElementById(인자1)

```html
<div id='header'>
    
</div>
<div id='header'>
               
</div>
```

```javascript
document.getElementById('header2') // null
const header = document.getElementById('header') // Object
header.innerHTML = 'Hello world!'
```



인자1 에 들어간는값은 `"header"`  데이터타입 **string**



**return**

```javascript
// Object
```



## window.document.getElementsTagName()



**복수선택**



**문법**

> getElementsTagName(인자1)

```javascript



// Object[]
const arr = [
    {name:'ingoo'},
    {name:'ingoo2'},
    {name:'ingoo3'}
]

// String[]
const arr2 = [
    'string1',
    'string2',
    'string3'
]

// Number[]
const arr3 = [
    1,
    2,
    3
]
```





**return**

```javascript
// Object[]
```



## querySelector()





## querySelectorAll()

