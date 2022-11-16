// Read
const form = document.querySelector("#commentFrm")
const total = document.querySelector("h4 > span")
const commentList = document.querySelector("#comment-list")
const list = []

function Comment(content) {
    this.userid = "web7722"
    this.content = content
    this.date = "2022-11-15"
    this.updated = false
}

function totalRecord() {
    total.innerHTML = `(${list.length})` // 템플릿 리터럴
}

function enterHandler(index) {
    return function (e) {
        if (e.keyCode !== 13) return
        list[index].content = e.target.value
        list[index].updated = !list[index].updated
        drawing()
    }
}

function contentRow(liElement, content, index) {
    const contentSpan = document.createElement("span")
    const updateBox = document.createElement("span")
    const input = document.createElement("input")
    const deleteSpan = document.createElement("span")
    const flag = list[index].updated

    if (flag) {
        liElement.append(updateBox)
        input.value = content
        input.addEventListener("keyup", enterHandler(index))
        updateBox.append(input)
    } else {
        liElement.append(contentSpan)
    }
    liElement.append(deleteSpan)

    contentSpan.setAttribute("class", "comment-span")
    input.setAttribute("class", "comment-update-input")
    deleteSpan.setAttribute("class", "comment-delete-btn")

    contentSpan.innerHTML = content
    deleteSpan.innerHTML = "❌"
}

function createRow(userid, content, date, index) {
    const ul = document.createElement("ul")
    const li1 = document.createElement("li")
    const li2 = document.createElement("li")
    const li3 = document.createElement("li")

    ul.append(li1)
    ul.append(li2)
    ul.append(li3)

    ul.setAttribute("class", "comment-row")
    ul.setAttribute("id", `row${index}`)
    li1.setAttribute("class", "comment-id")
    li2.setAttribute("class", "comment-content")
    li3.setAttribute("class", "comment-date")

    li1.innerHTML = userid
    contentRow(li2, content, index)
    li3.innerHTML = date

    return ul
}

function drawing() {
    commentList.innerHTML = ""
    for (let i = list.length - 1; i >= 0; i--) {
        const row = createRow(list[i].userid, list[i].content, list[i].date, i)
        commentList.append(row)
    }
}

function submitHandler(e) {
    e.preventDefault()
    const input = e.target.content

    if (input.value === "") {
        alert("내용을 넣고 등록해라!")
        return
    }

    const instance = new Comment(input.value)
    list.push(instance)
    totalRecord()

    drawing()
    e.target.reset()
}

function clickHandler(e) {
    const contentNode = e.target.parentNode
    const index = parseInt(contentNode.parentNode.id.replace("row", ""))
    switch (e.target.className) {
        case "comment-delete-btn":
            const flag = confirm("삭제 할꺼야?~")
            if (!flag) return

            list.splice(index, 1)
            drawing()

            break
        case "comment-span":
            list[index].updated = !list[index].updated
            const content = e.target.innerHTML
            console.log(contentNode.parentNode.innerHTML)
            contentNode.innerHTML = ""
            contentRow(contentNode, content, index)
            break
    }
}

totalRecord()
form.addEventListener("submit", submitHandler)
commentList.addEventListener("click", clickHandler)

// referance...
