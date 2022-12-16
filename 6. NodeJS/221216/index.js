const btn = document.querySelector("#submit")
const btn2 = document.querySelector("#submit2")
const btn3 = document.querySelector("#submit3")

const injected = {
    display: "#lottonum",
    box: "#backarea > #lottonum > li",
    // payinfo: "#payinfo",
    // info: "#info",
}

const injected2 = {
    display: "#lottonum2",
    box: "#backarea > #lottonum2 > li",
    // payinfo: "#payinfo",
    // info: "#info",
}

const injected3 = {
    display: "#lottonum3",
    box: "#backarea > #lottonum3 > li",
    // payinfo: "#payinfo",
    // info: "#info",
}

const lottoHandler = (injected) => (e) => {
    const config = {
        totalNumber: 45,
        count: 6,
    }
    const lotto = new Lotto(config)
    const display = new Display(injected)
    display.show(lotto)
}

btn.addEventListener("click", lottoHandler(injected))
btn2.addEventListener("click", lottoHandler(injected2))
btn3.addEventListener("click", lottoHandler(injected3))
