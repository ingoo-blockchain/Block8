let item = localStorage.getItem("boards")
if (item === null) {
    const intialState = []
    const state = JSON.stringify(intialState)
    localStorage.setItem("boards", state)
    item = state
}

const tbody = document.querySelector("tbody")
function template(item, index) {
    return `
    <tr>
        <td>${index + 1}</td>
        <td><a href='/board/view.html?index=${index}'>${item.subject}</a></td>
        <td>${item.content}</td>
        <td>${item.date}</td>
        <td>${item.hit}</td>
    </tr>
    `
}

const boards = JSON.parse(item)
for (let i = 0; i < boards.length; i++) {
    tbody.innerHTML += template(boards[i], i)
}
