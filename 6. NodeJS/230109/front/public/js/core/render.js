const app = document.querySelector("#app")

let state = {
    list: [
        { id: 1, userid: "web7722", content: "hello1", register: "2023-01-09" },
        { id: 2, userid: "web7722", content: "hello2", register: "2023-01-09" },
        { id: 3, userid: "web7722", content: "hello3", register: "2023-01-09" },
    ],
    user: {
        userid: "web7722",
        username: "ingoo",
    },
}
// { list: [...list, { id: 4, userid: "web7722", content: "hello4", register: "2023-01-09" }] }
const setState = (newState) => {
    // state 변수가 안바뀌었으면 render 함수를 호출하지 않겠다.
    if (state === newState) return
    state = { ...state, ...newState }
    render()
}

const render = () => {
    const { list } = state
    // const comments = list.map((comment) => {
    //     return `
    //     <ul class="comment-row" data-index="${comment.id}">
    //         <li class="comment-id">${comment.userid}</li>
    //         <li class="comment-content">${comment.content}</li>
    //         <li class="comment-date">${comment.register}</li>
    //     </ul>`
    // })

    // app.innerHTML = comments.join("")

    app.innerHTML = `
        <form>input</form>
        <div id='comment-list'>
            ${list
                .map((comment) => {
                    return `<ul class="comment-row" data-index="${comment.id}">
                            <li class="comment-id">${comment.userid}</li>
                            <li class="comment-content">${comment.content}</li>
                            <li class="comment-date">${comment.register}</li>
                        </ul>`
                })
                .join("")}
        </div>
        <button id='btn'>버튼!</button>
    `

    document.querySelector("#btn").addEventListener("click", () => {
        setState({ list: [...list, { id: 4, userid: "web7722", content: "hello4", register: "2023-01-09" }] })
    })
}

export default render
