class Circle {
    #circleColor
    constructor(_element, _number) {
        this.element = _element
        this.number = _number
        this.circleColor = ["a", "b", "c", "d", "e"]
        return this.create(_element, _number)
    }

    create(element, number) {
        switch (true) {
            case this.between(number, 40, 45):
                element.classList.add(this.circleColor[4])
                break
            case this.between(number, 30, 39):
                element.classList.add(this.circleColor[3])
                break
            case this.between(number, 20, 29):
                element.classList.add(this.circleColor[2])
                break
            case this.between(number, 10, 19):
                element.classList.add(this.circleColor[1])
                break
            case this.between(number, 1, 9):
                element.classList.add(this.circleColor[0])
                break
        }

        element.innerHTML = number
        return element
    }

    between(x, min, max) {
        return x >= min && x <= max
    }
}

class Lotto {
    #lottoRange = 6
    #lottoLastNumber = 45
    constructor() {
        return this.drawing()
    }

    drawing() {
        const result = []
        const lottoNms = this.getLottoNumber()

        for (let i = 0; i < lottoNms.length; i++) {
            const liElement = window.document.createElement("li")
            result.push(new Circle(liElement, lottoNms[i]))
        }

        return result
    }

    linearSearch(array, target) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === target) return i
        }

        return -1
    }

    insertionSort(array) {
        for (let i = 1; i < array.length; i++) {
            let cur = array[i]
            let left = i - 1

            while (left >= 0 && array[left] > cur) {
                array[left + 1] = array[left]
                array[left] = cur
                cur = array[left]
                left--
            }
        }

        return array
    }

    getRandomNumber() {
        return Math.floor(Math.random() * this.#lottoLastNumber) + 1
    }
    // 배열이 6개가되면 종료한다.
    // 배열안에 랜덤값을 비교하여 중복이 되지않을경우에만 push한다.
    getLottoNumber() {
        const result = []
        while (true) {
            const number = this.getRandomNumber()
            if (this.linearSearch(result, number) === -1) result.push(number)
            if (result.length === 6) break
        }

        return this.insertionSort(result)
    }
}

const btn = document.querySelector("#btn")
const lottoArea = document.querySelector("#lotto")
btn.addEventListener("click", function () {
    lottoArea.innerHTML = "로딩중~~"
    setTimeout(function () {
        lottoArea.innerHTML = ""
        lottoArea.append(...new Lotto())
    }, 1000)
})
