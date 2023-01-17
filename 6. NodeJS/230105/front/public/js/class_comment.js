class CommentHeader {
    constructor() {}
}

class CommentBody {
    constructor() {}
}

class Template {
    constructor(templates) {
        return this.create(templates)
    }

    clone(selecotr) {
        const template = document.querySelector(selecotr)
        const clone = document.importNode(template.content, true)
        return clone
    }

    create(templates) {
        let obj = {}
        for (const key in templates) {
            obj[key] = this.clone(templates[key])
        }
        return obj
    }
}

class Request {
    constructor(axios) {
        const config = {
            baseURL: "http://localhost:3000",
            withCredentials: true,
            onUploadProgress: (progressEvent) => {
                // 업로드 진행 이벤트 작업 수행
            },
            onDownloadProgress: (progressEvent) => {
                // 다운로드 진행 이벤트 작업 수행
            },
            validateStatus: (status) => {
                return status >= 200 && status < 300 // 기본값
            },
        }
        return axios.create(config)
    }
}

class CommentRequest {
    constructor(request) {
        this.request = request
    }

    async create(body) {
        try {
            const { data } = await this.request.post("/comments", body)
            return data
        } catch (e) {
            return null
        }
    }

    async find() {
        try {
            const { data } = await this.request.get("/comments")
            return data
        } catch (e) {
            return null
        }
    }
}

class Comment {
    constructor({ root, form, commentList, template, request }) {
        this.root = document.querySelector(root)
        this.form = document.querySelector(form)
        this.commentList = document.querySelector(commentList)
        this.template = template
        this.request = request
        this.state = {}
        this.init()
    }

    async init() {
        const response = await request.find()
        if (!response) alert("오류오류~")
    }
}

class Component {
    constructor() {

    }

    render(){
        
    }
}

class State {
    constructor(state) {
        this.state = state

        return [this.state, this.setState]
    }

    setState(value) {
        if (this.state === value) return
        this.state = value
        // reRender
    }
}

const request = new Request(axios)
const req = new CommentRequest(request)
// req.create({ content: "됨?" }).then((data) => {
//     console.log(data)
// })

const comment = new Comment({
    root: ".comment",
    form: "#commentFrm",
    commentList: "#comment-list",
    template: new Template({
        commentRow: "#commentRow",
        contentBasic: "#content-baisc",
        contentUpdate: "#content-update",
    }),
    request: req,
})

// const template =
