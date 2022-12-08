console.log(this)
console.log(window)

// window.alert("경고하겠!") // 경고창
// const a = window.prompt("데이터주삼!")
// console.log(a)

// time()
// timeEnd()
console.log(window.console)

// setTimeout
// setInterval

// DOM

console.log(document)
const title = document.getElementById("title")
console.log(title)
title.innerHTML = "DOM에 오신걸 환영합니다!"

const sp = document.getElementsByTagName("span")
console.log(sp)

const domTitle = document.getElementById("DOM-title")
const spList = domTitle.getElementsByTagName("span")

console.log(spList.length)

// 1. 0~2 까지 반복하는
// 2. spList Element를 각각 출력
// 3. span1-1 span1-2 span1-3

// for (let i = 0; i < spList.length; i++) {
//     spList[i].innerHTML = "span1-" + (i + 1)
// }

const spList2 = document.getElementsByClassName("sp")
for (let i = 0; i < spList2.length; i++) {
    spList2[i].innerHTML = "span1-" + (i + 1)
}
