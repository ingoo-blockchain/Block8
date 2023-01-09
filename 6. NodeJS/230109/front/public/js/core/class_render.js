class Component {
    target // 앞으로 넣을 Element
    state // 데이터들

    constructor(_target) {
        this.target = _target
        this.setup()
        this.render()
    }

    setup() {} // 자식클래스에서 구현
    template() {} // 자식클래스에서 구현
    render() {
        this.target.innerHTML = this.template()
    }
    setState(newState) {
        if (this.state === newState) return
        this.state = { ...this.state, ...newState }
        this.render()
    }
}

class App extends Component {
    setup() {
        this.state = {
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
    }

    template() {
        const { list } = this.state

        return `
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
    }
}

const a = new App(document.querySelector("#app"))
console.dir(a)

export default ""
