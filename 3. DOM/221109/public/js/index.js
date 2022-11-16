/*
    list를 만듭니다.
        1. 어디에 엘리먼트를 추가할거냐 
        2. 어떤 엘리먼트로 추가할꺼냐.
        3. 추가했던 엘리먼트의 내용을 어떻게 만들거냐.
        4. 만들었던 엘리먼트를 어떻게 추가할꺼냐.
*/
function submitHandler(e) {
    e.preventDefault()

    const uid = document.querySelector("#uid")
    const upw = document.querySelector("#upw")
    const error = document.querySelector("#error")
    console.log(uid)
    console.log("아이디는 : ", uid.value !== "")
    console.log("패스워드는 : ", upw.value !== "")

    if (uid.value !== "" && upw.value !== "") {
        // e.target.submit()
        const userList = document.querySelector("#userList")
        const li = document.createElement("li")
        li.innerHTML = uid.value + " " + upw.value
        userList.append(li)

        uid.value = ""
        upw.value = ""
        error.style = "display:none;"
    } else {
        alert("아이디나 패스워드를입력해주셈!!")
        error.style = "display:block;"
    }

    uid.focus()
}

// 1
function init() {
    const form = document.querySelector("#loginForm")
    form.addEventListener("submit", submitHandler)
}

document.addEventListener("DOMContentLoaded", init)
