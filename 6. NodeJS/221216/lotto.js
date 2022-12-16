class Lotto {
    constructor({ totalNumber, count }) {
        this.lotto = this.randomLotto(count, totalNumber)
        this.className = this.getClassName(this.lotto)
    }

    getNumber(start, end) {
        const random = Math.floor(Math.random() * (end - start) + start)
        return end < start ? null : random
    }

    getSpliceNumber(arr) {
        return (v) => {
            const lottoIndex = this.getNumber(1, arr.length)
            const [number] = arr.splice(lottoIndex, 1)
            return number
        }
    }

    randomLotto(count, totalNumber) {
        const result = new Array(count).fill(null)
        const lotto = new Array(totalNumber).fill(null).map((value, index) => index + 1)
        return result.map(this.getSpliceNumber(lotto)).sort((a, b) => a - b)
    }

    between(number) {
        return Math.ceil(number / 10) - 1
    }

    getClassName(arr) {
        const ClassPattern = {
            0: "a",
            1: "b",
            2: "c",
            3: "d",
            4: "e",
        }
        return arr.map((v) => ClassPattern[this.between(v)])
    }
}

const config = {
    totalNumber: 45,
    count: 6,
}

const lotto = new Lotto(config)
