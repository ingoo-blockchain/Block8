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

const events = ({ submitHandler }) => {
    const form = document.querySelector("#commentFrm")
    // const list = document.querySelector("#comment-list")
    form.addEventListener("submit", submitHandler)
}

;(async () => {
    init()
    events({
        submitHandler,
    })
})()
