const form = document.querySelector("form")
const user = document.querySelector("input[type=text]")
const pass = document.querySelector("input[type=password]")

const xhr = new XMLHttpRequest()

form.addEventListener("submit", (e) => {
    e.preventDefault()
    xhr.open("post", "http://localhost:3000/user/login") // 정의
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
    xhr.send(`user_id=${user.value}&user_pw=${pass.value}`)
    xhr.onload = () => {
        console.log(xhr)
    }
})
