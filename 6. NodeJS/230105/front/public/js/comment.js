const enterHandler = (id, before, ul) => {
    return (e) => {
        if (e.keyCode !== 13) return
        try {
            if (e.target.value === "") throw new Error("인간적으로 빈칸은 하지말자.")
            if (e.target.value === before) return
            // 요청코드
            const basic = basicBox(e.target.value, id)
            ul.innerHTML = ""
            ul.append(basic)
        } catch (e) {
            alert(e.message)
        }
    }
}

const basicBox = (content) => {
    const template = document.querySelector("#content-baisc")
    const clone = document.importNode(template.content, true)

    const span = clone.querySelector(".comment-update-btn")
    span.innerHTML = content
    return clone
}

const updateBox = (content, id, ul) => {
    const template = document.querySelector("#content-update")
    const clone = document.importNode(template.content, true)
    const input = clone.querySelector("span > input")
    input.addEventListener("keyup", enterHandler(id, content, ul))
    input.value = content

    return clone
}

const box = (updated, content) => (updated ? updateBox(content) : basicBox(content))

const row = ({ id, userid, content, register, updated }) => {
    /*
        content: "hello world!"
        id: 1
        register: "2023-01-04"
        updated: false
        userid: "web7722"
    */
    const template = document.querySelector("#commentRow")
    const clone = document.importNode(template.content, true)

    const ul = clone.querySelector("ul")
    const li = clone.querySelectorAll("li")

    ul.dataset.index = id
    li[0].innerHTML = userid
    li[1].append(box(updated, content)) // Element
    li[2].innerHTML = register

    return ul
}

const drawing = (ul) => {
    const commentElement = document.querySelector("#comment-list")
    commentElement.append(ul)
    const ulElement = document.querySelectorAll("#comment-list > ul")
    totalRecord(ulElement.length)
}

const getCommentList = async () => {
    try {
        const res = await axios.get("http://localhost:3000/comments")
        console.log(res.data)
        return res.data
    } catch (e) {
        return null
    }
}

const addComment = async (content) => {
    try {
        const res = await axios.post("http://localhost:3000/comments", {
            content,
        })
        return res.data
    } catch (e) {
        return null
    }
}

const deleteComment = async (id) => {
    try {
        const res = await axios.delete(`http://localhost:3000/comments/${id}`)
        return res.data
    } catch (e) {
        return null
    }
}

const totalRecord = (count) => {
    const countElement = document.querySelector("h4 > span")
    countElement.innerHTML = `(${count})`
}

const init = async () => {
    const list = await getCommentList() // []
    if (list === null) return
    for (const comment of list) {
        const item = row(comment) // ulElement
        drawing(item)
    }
}

const events = ({ submitHandler, clickHandler }) => {
    const form = document.querySelector("#commentFrm")
    const list = document.querySelector("#comment-list")
    form.addEventListener("submit", submitHandler)
    list.addEventListener("click", clickHandler)
}

const submitHandler = async (e) => {
    e.preventDefault()
    const { content } = e.target
    console.log(content.value)

    const item = await addComment(content.value)
    const ul = row(item)
    drawing(ul)

    e.target.reset()
    content.focus()
}

const clickHandler = async (e) => {
    const contentElement = e.target.parentNode
    const ulElement = contentElement.parentNode
    const id = ulElement.dataset.index
    if (e.target.className === "comment-update-btn") {
        console.log("제목을 클릭했따.")
        const beforeContent = contentElement.querySelector(".comment-update-btn").innerHTML

        contentElement.innerHTML = ""
        contentElement.append(updateBox(beforeContent, id, contentElement))
    } else if (e.target.className === "comment-delete-btn") {
        try {
            if (!confirm("삭제할랭?")) return
            const result = await deleteComment(id)
            if (0 <= result.affectedRows) throw new Error("삭제가 안된거같은디?")
            e.target.parentNode.parentNode.remove()
        } catch (e) {
            alert(e.message)
        }
    }
}

;(async () => {
    init()
    events({
        submitHandler,
        clickHandler,
    })
})()
