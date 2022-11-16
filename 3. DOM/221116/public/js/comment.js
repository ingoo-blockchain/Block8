const commentFrm = document.querySelector("#commentFrm")
const commentList = document.querySelector("#comment-list")
const state = []

class Comment {
    constructor(content) {
        this.userid = "web7722"
        this.Content = content
        // this.date = "2022-11-16"
        this.updated = false
        this.updateValue = ""
        this.now = new Date()
    }

    set Content(value) {
        if (value.length === 0) throw new Error("Content가 비워있음.")
        this.content = value
    }

    getToday(separator = "") {
        const date = this.now
        let mm = date.getMonth() + 1 // 0 ~ 11
        let dd = date.getDate()
        let yyyy = date.getFullYear()
        mm = (mm > 9 ? "" : "0") + mm
        dd = (dd > 9 ? "" : "0") + dd // 1 -> 01
        const arr = [yyyy, mm, dd]
        return arr.join(separator)
    }
}

function addComment(instance) {
    state.push(instance)
}

function createRow(index) {
    const ul = document.createElement("ul")
    const li1 = document.createElement("li")
    const li2 = document.createElement("li")
    const li3 = document.createElement("li")

    const deleteBtn = document.createElement("span")

    ul.append(li1)
    ul.append(li2)
    ul.append(li3)

    ul.setAttribute("class", "comment-row")
    ul.setAttribute("data-index", index)
    li1.setAttribute("class", "comment-id")
    li2.setAttribute("class", "comment-content")
    li3.setAttribute("class", "comment-date")
    deleteBtn.setAttribute("class", "comment-delete-btn")
    deleteBtn.innerHTML = "❌"

    li1.innerHTML = state[index].userid
    if (state[index].updated) {
        const input = document.createElement("input")
        input.addEventListener("keyup", function (e) {
            if (e.keyCode === 13) {
                state[index].content = e.target.value
                state[index].updated = false
                drawing()
            } else {
                state[index].updateValue = e.target.value
            }
        })
        input.setAttribute("class", "comment-update-input")
        input.value = state[index].updateValue
        li2.append(input)
    } else {
        li2.innerHTML = state[index].content
        li2.append(deleteBtn)
    }

    li3.innerHTML = state[index].getToday("/")

    return ul
}

function drawing() {
    commentList.innerHTML = ""
    for (let i = state.length - 1; i >= 0; i--) {
        const row = createRow(i)
        commentList.append(row)
    }
}

function submitHandler(e) {
    e.preventDefault()
    const form = e.target
    const value = form.content.value

    try {
        const instance = new Comment(value)
        addComment(instance)
        drawing()
    } catch (error) {
        alert(error.message)
        console.log(error)
    }
    form.content.focus()
    e.target.reset()
}

function clickHandler(e) {
    if (e.target.className === "comment-content") {
        const index = parseInt(e.target.parentNode.dataset.index)
        state[index].updated = true
        state[index].updateValue = state[index].content
        drawing()
    } else if (e.target.className === "comment-delete-btn") {
        const index = e.target.parentNode.parentNode.dataset.index
        state.splice(index, 1)
        drawing()
    }

    if (e.target.className !== "comment-content") return
}

commentList.addEventListener("click", clickHandler)
commentFrm.addEventListener("submit", submitHandler)
