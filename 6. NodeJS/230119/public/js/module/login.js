import request from "/js/lib/request.js"

console.log(axios)
console.log(request)

// submit
// input - userid, userpw value
// value -> request 브라우저 -> 백 요청
// axios 응답.
// token
// javascript cookie ?

const frm = document.querySelector("#loginfrm")

frm.addEventListener("submit", async (e) => {
    try {
        e.preventDefault()

        const { userid, userpw } = e.target
        console.log(userid.value, userpw.value)

        const response = await request.post("/auth", {
            userid: userid.value,
            userpw: userpw.value,
        })

        console.log(response)
        console.log(response.data)
        if (response.status === 200) {
            // cookie 설정을

            // 쿠키

            document.cookie = `token=${response.data.token};`
            location.href = "/"
        }
    } catch (e) {
        alert("아이디랑 패스워드가 다름!")
    }
})
