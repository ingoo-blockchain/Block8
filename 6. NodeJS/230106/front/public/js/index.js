import request from "/js/commentRequest.js"
import template from "/js/comment.js"

const basic = (content) => {
    const clone = template.basic()

    const span = clone.querySelector(".comment-update-btn")
    span.innerHTML = content
    return clone
}

const row = ({ id, userid, content, register }) => {
    const clone = template.row()

    const ul = clone.querySelector("ul")
    const li = clone.querySelectorAll("li")

    ul.dataset.index = id
    li[0].innerHTML = userid
    li[1].append(basic(content))
    li[2].innerHTML = register

    return ul
}

const drawing = (ul) => {
    const commentElement = document.querySelector("#comment-list")
    commentElement.prepend(ul)
}

const init = async () => {
    const list = await request.find()
    if (list === null || list.length === 0) return

    for (const comment of list) {
        const element = row(comment)
        drawing(element)
    }
}

const submitHandler = async (e) => {
    e.preventDefault()
    const { content } = e.target
    // console.log(content.value)

    const newComment = await request.create({ content: content.value })
    const newElement = row(newComment)
    drawing(newElement)

    e.target.reset()
    content.focus()
}

const changeBtn = (contentEle, before) => {
    const enterHandler = (e) => {
        if (e.keyCode !== 13) return
        try {
            if (e.target.value === "") throw new Error("인간적으로 빈칸은 하지말자~")
            if (e.target.value === before) return

            // requeset.update() id
            // result : 1

            contentEle.innerHTML = ""
            const basicEle = basic(e.target.value)
            contentEle.append(basicEle)
        } catch (e) {
            alert(e.message)
        }
    }
    // before : 잘된다!
    // 화면을 바꿔주기.
    contentEle.innerHTML = ""
    const clone = template.update()
    const input = clone.querySelector("span > input")
    input.value = before

    input.addEventListener("keyup", enterHandler)
    contentEle.append(clone)
    // enter 되돌리기
}

const deleteBtn = (ulElement) => {
    try {
        if (!confirm("삭제할랭?")) return
        // 요청 코드 request.delete(id)
        // result:1
        ulElement.remove()
    } catch (e) {
        alert(e.message)
    }
}

const clickHandler = (e) => {
    const contentElement = e.target.parentNode
    const ulElement = contentElement.parentNode
    const { index: id } = ulElement.dataset

    switch (e.target.className) {
        case "comment-update-btn":
            changeBtn(contentElement, e.target.innerHTML)
            break
        case "comment-delete-btn":
            deleteBtn(ulElement)
            break
    }
}

const events = ({ submitHandler, clickHandler }) => {
    const form = document.querySelector("#commentFrm")
    const list = document.querySelector("#comment-list")
    form.addEventListener("submit", submitHandler)
    list.addEventListener("click", clickHandler)
}

;(async () => {
    init()
    events({
        submitHandler,
        clickHandler,
    })
})()
