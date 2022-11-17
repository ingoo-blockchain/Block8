const writeFrm = document.querySelector("#writeFrm")
class Board {
    constructor(subject, content, writer) {
        this.index = 0
        this.subject = subject
        this.content = content
        this.writer = writer
        this.date = "2022-11-17"
        this.hit = 0
    }
}

function submitHandler(e) {
    e.preventDefault()
    const subject = e.target.subject.value
    const content = e.target.content.value
    const writer = e.target.writer.value
    const instance = new Board(subject, content, writer)

    const boards = JSON.parse(localStorage.getItem("boards"))
    boards.push(instance)
    const index = boards.length - 1

    const item = JSON.stringify(boards)
    localStorage.setItem("boards", item)

    e.target.reset()

    location.href = "/board/view.html?index=" + index
}
writeFrm.addEventListener("submit", submitHandler)

/*
{
    index:0,
    subject:'',
    content:'',
    writer:'',
    date:'',
    hit:''
}
*/
