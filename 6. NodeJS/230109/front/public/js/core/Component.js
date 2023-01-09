class Component {
    target // 앞으로 넣을 Element
    state // 데이터들

    constructor(_target) {
        this.target = _target
        this.setup()
        this.render()
        this.setEvent()
    }

    setup() {} // 자식클래스에서 구현
    template() {} // 자식클래스에서 구현
    mounted() {}
    render() {
        this.target.innerHTML = this.template()

        this.mounted()
        //
    }

    setEvent() {}
    addEvent(type, selector, callback) {
        console.log(selector)
        console.log(document.querySelectorAll(selector))
        const children = [...document.querySelectorAll(selector)]
        const isTarget = (target) => children.includes(target) || target.closest(selector)

        this.target.addEventListener(type, (e) => {
            if (!isTarget(e.target)) return false
            callback(e)
        })
        // 논리연산자
        // const port = process.env.PORT || 3000
        // const a = null || 10 || undefined
        // const b = null && 10 && undefined
        // const c = console.log("hello") || 10
        // const d = 10 || console.log("hello")
    }

    setState(newState) {
        if (this.state === newState) return
        this.state = { ...this.state, ...newState }
        this.render()
    }
}

export default Component
