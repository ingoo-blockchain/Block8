// XMLHttpRequest 요청
const xhr = new XMLHttpRequest() // { open:()=>{}, setRequestHeader:()=>{}, send:()=>{}, onload=()=>{} }
// open

const ajax_get = document.querySelector("#ajax_get")
const ajax_post = document.querySelector("#ajax_post")
const msg = document.querySelector("#msg")

ajax_get.addEventListener("click", () => {
    xhr.open("get", "http://localhost:3000/ajax?userid=web7722")
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
    xhr.send()

    xhr.onload = () => {
        // console.log(xhr.readyState, xhr.status, xhr.response)
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = xhr.response // true or false
            if (response === "true") {
                msg.innerHTML = "아이디가 중복되었습니다."
                msg.style.color = "red"
            } else {
                msg.innerHTML = "사용가능한 아이디 입니다."
                msg.style.color = "green"
            }
        }
    }
})
// userid web7722
ajax_post.addEventListener("click", () => {
    xhr.open("post", "http://localhost:3000/ajax")
    xhr.setRequestHeader("Content-type", "application/json")
    const data = { userid: "web7722" }
    xhr.send(JSON.stringify(data))

    xhr.onload = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = xhr.response // true or false
            if (response === "true") {
                msg.innerHTML = "아이디가 중복되었습니다."
                msg.style.color = "red"
            } else {
                msg.innerHTML = "사용가능한 아이디 입니다."
                msg.style.color = "green"
            }
        }
    }
})
