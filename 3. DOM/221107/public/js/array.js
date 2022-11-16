function linearSearch(array, target) {
    const length = array.length

    for (let i = 0; i < length; i++) {
        if (array[i] === target) {
            return i
        }
    }

    return -1
}

function shuffleNumber() {
    const result = [] // 랜덤 6개
    while (true) {
        const number = Math.floor(Math.random() * 45) + 1
        if (linearSearch(result, number) === -1) result.push(number)
        if (result.length === 6) break
    }

    return result
}
//45 >= 1 && 45 <= 9
function createCircle(ele, i) {
    const between = (x, min, max) => x >= min && x <= max
    const clear = ["a", "b", "c", "d", "e"]
    ele.classList.remove(...clear)
    if (between(i, 40, 45)) {
        ele.classList.add("a")
    } else if (between(i, 30, 39)) {
        ele.classList.add("b")
    } else if (between(i, 20, 29)) {
        ele.classList.add("c")
    } else if (between(i, 10, 19)) {
        ele.classList.add("d")
    } else if (between(i, 1, 9)) {
        ele.classList.add("e")
    } else {
        console.log(between(i, 1, 9))
    }
}

function setLotto() {
    const lottoBox = document.querySelectorAll("#gnb > li")
    const result = shuffleNumber()

    for (let i = 0; i < result.length; i++) {
        lottoBox[i].innerHTML = result[i]
        createCircle(lottoBox[i], result[i])
    }
}

const btn = document.querySelector("#btn")
btn.addEventListener("click", setLotto)
