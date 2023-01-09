import Component from "/js/core/Component.js"

class App extends Component {
    setup() {
        this.state = {
            list: [
                { id: 1, userid: "web7722", content: "hello1", register: "2023-01-09", updated: false },
                { id: 2, userid: "web7722", content: "hello2", register: "2023-01-09", updated: false },
                { id: 3, userid: "web7722", content: "hello3", register: "2023-01-09", updated: false },
            ],
            user: {
                userid: "web7722",
                username: "ingoo",
            },
        }
    }

    content(content) {
        return `
            <span class="comment-update-btn">${content}</span>
            <span class="comment-delete-btn">❌</span>
        `
    }

    update(content) {
        return `
            <span>
                <input type="text" class="comment-update-input" value="${content}" data-value="" />
            </span>
            <span class="comment-delete-btn">❌</span>
        `
    }

    template() {
        const { list } = this.state

        return `
            <ul class='comment'>
                <li class='comment-form'>
                    <form id='commentFrm'>
                        <h4>
                            댓글쓰기
                            <span></span>
                        </h4>
                        <span class='ps_box'>
                            <input type='text' class='int' name='content' placeholder='댓글입력점.'>
                        </span>
                        <button type='submit' class='btn'>등록</button>
                    </form>
                </li>
                <li id='comment-list'>
                    ${list
                        .map((comment) => {
                            return `<ul class="comment-row" data-index="${comment.id}">
                                    <li class="comment-id">${comment.userid}</li>
                                    <li class="comment-content">
                                        ${comment.updated ? this.update(comment.content) : this.content(comment.content)}
                                    </li>
                                    <li class="comment-date">${comment.register}</li>
                                </ul>`
                        })
                        .join("")}
                </li>
            </ul>
        `
    }

    mounted() {
        console.log(" render 완료되면 무저건 실행되는 함수 ^^")
    }

    setEvent() {
        // 첫번째
        // this.target.querySelector("#btn").addEventListener("click", () => {
        //     console.log(`클릭!!`)
        //     const { list } = this.state
        //     this.setState({ list: [...list, { id: 4, userid: "web7722", content: "hello4", register: "2023-01-09" }] })
        // })
        // 두번째
        // this.target.addEventListener("click", (e) => {
        //     const list = [...this.state.list]
        //     if (e.target.classList.contains("btn")) {
        //         list.push({ id: 4, userid: "web7722", content: "hello4", register: "2023-01-09" })
        //         this.setState({ list })
        //     }
        // })

        this.addEvent("submit", "#commentFrm", (e) => {
            e.preventDefault()
            const { list } = this.state
            this.setState({ list: [...list, { id: list.length, userid: "web7722", content: e.target.content.value, register: "2023-01-09", updated: false }] })
        })

        this.addEvent("click", ".comment-update-btn", (e) => {
            const ul = e.target.closest(".comment-row")
            const { index } = ul.dataset
            const list = [...this.state.list]
            const newList = list.map((v) => {
                if (v.id === parseInt(index)) v.updated = true
                return v
            })
            console.log(newList)
            this.setState({ list: newList })
        })

        this.addEvent("click", ".comment-delete-btn", (e) => {
            const ul = e.target.closest(".comment-row")
            const { index } = ul.dataset
            // 요청때리고
            // 응답결과
            const list = [...this.state.list].filter((v) => v.id !== parseInt(index))
            this.setState({ list })
        })

        this.addEvent("keypress", ".comment-update-input", (e) => {
            if (e.keyCode !== 13) return

            const ul = e.target.closest(".comment-row")
            const index = parseInt(ul.dataset.index)

            // 요청
            // 응답

            const list = this.state.list.map((v) => {
                if (v.id === index) {
                    v.content = e.target.value
                    v.updated = false
                }

                return v
            })

            this.setState({ list })
        })

        // document.querySelector("click", () => {})
    }
}

export default App
