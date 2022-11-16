const pw = document.querySelector("#pw") // 객체
const pw2 = document.querySelector("#pw")

console.log(pw === pw2) // true ? false?

const repw = document.querySelector("#repw")
const error = document.querySelector("#pwError")

function changeHandler(e) {
    if (pw.value === "") {
        error.style = "color:red;"
        error.innerHTML = "비밀번호를 먼저 입력해주세요."
        pw.focus()
        e.target.value = ""
        return
    }

    let style = ""
    let innerHTML = ""

    if (e.target.value !== pw.value) {
        style = "color:red;"
        innerHTML = "패스워드가 일치하지 않습니다."
    } else {
        style = "color:green;"
        innerHTML = "패스워드가 일치합니다."
    }

    error.style = style
    error.innerHTML = innerHTML
}

/*
keyup : 키보드를 누르고 떗을때
*/
repw.addEventListener("keyup", changeHandler)
