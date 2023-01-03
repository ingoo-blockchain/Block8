const ajax_get = document.querySelector("#ajax_get")
const ajax_post = document.querySelector("#ajax_post")
const msg = document.querySelector("#msg")

// request({ method: "get", path: "/users/5", body: "" }, ()=>{ ... })
const request = ({ method, path, body }, callback) => {
    const host = "http://localhost:3000"
    const xhr = new XMLHttpRequest()
    xhr.open(method, `${host}${path}`)
    xhr.setRequestHeader("Content-type", "application/json")
    xhr.send(JSON.stringify(body))

    xhr.onload = () => {
        if (xhr.status === 200) {
            callback(xhr.response)
        }
    }
}

ajax_get.addEventListener("click", () => {
    request({ method: "get", path: "/users/1" }, (response) => {
        console.log(response)
    })
})

ajax_post.addEventListener("click", () => {
    request({ method: "post", path: "/users" }, (response) => {
        console.log(response)
    })
})

const userList = document.querySelector("#userlist")
const btn = document.querySelector("#btn")
const card = ({ idx, userid, userpw, username, gender }) => {
    const ulElement = document.createElement("ul")
    const idxElement = document.createElement("li")
    const idElement = document.createElement("li")
    const pwElement = document.createElement("li")
    const nameElement = document.createElement("li")
    const genderElement = document.createElement("li")

    idxElement.innerHTML = idx
    idElement.innerHTML = userid
    pwElement.innerHTML = userpw
    nameElement.innerHTML = username
    genderElement.innerHTML = gender

    ulElement.append(idxElement)
    ulElement.append(idElement)
    ulElement.append(pwElement)
    ulElement.append(nameElement)
    ulElement.append(genderElement)
    userList.append(ulElement)
}

request({ method: "get", path: "/users" }, (response) => {
    const arr = JSON.parse(response)
    console.log(arr)
    arr.forEach((v) => {
        card(v)
    })
})

btn.addEventListener("click", () => {
    request(
        {
            method: "post",
            path: "/users",
            body: {
                userid: document.querySelector("#userid").value,
                userpw: "1234",
                username: "ingoo",
                gender: "남자",
            },
        },
        (response) => {
            card(JSON.parse(response))
        }
    )
    // {"idx":4,"userid":"web7722","userpw":"1234","username":"ingoo", gender:'남자'}
    // card({ idx: 2, userid: "webasdf", userpw: "asdfasdf", username: "asdfasdf", gender: "남자" })
})
