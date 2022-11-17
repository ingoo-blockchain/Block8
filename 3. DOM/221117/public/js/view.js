const item = window.localStorage.getItem("boards")
const boards = JSON.parse(item)

const idx = location.search.split("=") // '?index=3' ['?index','3']
const index = idx[1]
const board = boards[index]

const viewfrm = document.querySelectorAll("#viewfrm > div")

for (let i = 0; i < viewfrm.length; i++) {
    const id = viewfrm[i].id // 'subject'
    const span = viewfrm[i].querySelector("span")
    span.innerHTML = board[id]
}
