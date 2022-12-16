const LottoDisplay = document.querySelector("#lottonum")
const LottoBox = document.querySelectorAll("#backarea>#lottonum > li")
const Payinfo = document.querySelector("#payinfo")
const Info = document.querySelector("#info")

class Display {
    display
    box
    payinfo
    info
    constructor({ display, box, payinfo, info }) {
        this.display = document.querySelector(display)
        this.box = document.querySelectorAll(box)
        this.payinfo = document.querySelector(payinfo)
        this.info = document.querySelector(info)
    }

    show({ lotto, className }) {
        for (let i = 0; i < this.box.length; i++) {
            this.box[i].innerHTML = lotto[i]
            this.box[i].className = className[i]
        }

        this.showDisplay()
        this.showDisplay()
        if (this.info !== null) this.showInfo()
        if (this.info !== null) this.showPayInfo()
    }

    showDisplay() {
        this.display.style = "display:flex;"
    }

    showInfo() {
        this.info.style = "display:block;"
    }

    showPayInfo() {
        this.payinfo.style = "display:block;"
    }
}
