// const btn = document.querySelector("#submit")
// const LottoDisplay = document.querySelector("#lottonum")
// const LottoBox = document.querySelectorAll("#backarea>#lottonum > li")
// const Payinfo = document.querySelector("#payinfo")
// const Info = document.querySelector("#info")
// const getLotto = () => {
//     const ClassPattern = {
//         0: "a",
//         1: "b",
//         2: "c",
//         3: "d",
//         4: "e",
//     }

//     const getRandom = (start, end) => Math.floor(Math.random() * (end - start) + start)
//     const getNumber = (start, end) => (end < start ? null : getRandom(start, end))

//     const randomLottoFn = (length, count) => {
//         const result = new Array(count).fill(null)
//         const lotto = new Array(length).fill(null).map((value, index) => index + 1)
//         return result
//             .map((v) => {
//                 const lottoIndex = getNumber(1, lotto.length)
//                 const [number] = lotto.splice(lottoIndex, 1)
//                 return number
//             })
//             .sort((a, b) => a - b)
//     }

//     const between = (number) => Math.ceil(number / 10) - 1
//     const getClassName = (arr) => arr.map((v) => ClassPattern[between(v)])

//     return {
//         randomLotto: randomLottoFn(45, 6),
//         numClassName: getClassName(this.randomLotto),
//     }
// }
// function lottoHandler(e) {
//     // const randomLotto = randomLottoFn(45, 6)
//     // const numClassName = getClassName(randomLotto)
//     const { randomLotto, numClassName } = getLotto()

//     for (let i = 0; i < LottoBox.length; i++) {
//         LottoBox[i].innerHTML = randomLotto[i]
//         LottoBox[i].className = numClassName[i]
//     }

//     LottoDisplay.style = "Display:flex;"
//     Info.style = "display:block;"
//     Payinfo.style = "Display:block;"
// }
// btn.addEventListener("click", lottoHandler)
