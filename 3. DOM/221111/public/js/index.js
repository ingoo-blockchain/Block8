let intervalId = 0
let count = 0

function init() {
    const imgs = document.querySelectorAll("#visual > li")
    const btns = document.querySelectorAll("#visualBtn > li")
    const prevBtn = document.querySelector(".prev")
    const nextBtn = document.querySelector(".next")

    function findIndex() {
        for (let i = 0; i < imgs.length; i++) {
            if (imgs[i].getAttribute("class") === "on") return i
        }
    }

    function slide() {
        let prev = count === 0 ? imgs.length - 1 : count - 1
        imgs[count].className = "on"
        imgs[prev].className = ""

        if (++count === 3) count = 0
    }

    function btnHandler(index) {
        return function (e) {
            clearInterval(intervalId)
            const current = findIndex()

            imgs[current].className = ""
            imgs[index].className = "on"
            count = index
            intervalId = setInterval(slide, 3000)
        }
    }

    function prevHandler(e) {
        clearInterval(intervalId)
        const current = findIndex()
        const index = current === 0 ? imgs.length - 1 : current - 1
        imgs[current].className = ""
        imgs[index].className = "on"
        count = index
        intervalId = setInterval(slide, 3000)
    }

    function nextHandler(e) {
        clearInterval(intervalId)
        const current = findIndex()
        const index = current === imgs.length - 1 ? 0 : current + 1
        imgs[current].className = ""
        imgs[index].className = "on"
        count = index
        intervalId = setInterval(slide, 3000)
    }

    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", btnHandler(i))
    }

    prevBtn.addEventListener("click", prevHandler)
    nextBtn.addEventListener("click", nextHandler)

    slide()
    intervalId = setInterval(slide, 3000)
}

document.addEventListener("DOMContentLoaded", init)
