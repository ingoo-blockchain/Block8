const frm = document.querySelector("#modifyFrm")

const subject = document.querySelector("input[name=subject]")
const writer = document.querySelector("input[name=writer]")
const content = document.querySelector("textarea[name=content]")

const idx = location.search.split("=") // ?index=0 => ['?index','0']
const index = idx[1]

console.log(index) // 2

const item = localStorage.getItem("boards") // [{},{},{}] : string
const boards = JSON.parse(item) // [{},{},{}] : object

console.log(boards)

console.log(boards[index]) // {index: 0, subject: '안녕안녕', content: '안녕안녕\n', writer: '안녕안녕', date: '2022-11-17', …}

subject.value = boards[index].subject
writer.value = boards[index].writer
content.innerHTML = boards[index].content

frm.addEventListener("submit", function (e) {
    e.preventDefault()

    boards[index].subject = subject.value
    boards[index].writer = writer.value
    boards[index].content = content.value

    const data = JSON.stringify(boards)
    localStorage.setItem("boards", data)

    location.href = `/board/view.html?index=${index}`
})
