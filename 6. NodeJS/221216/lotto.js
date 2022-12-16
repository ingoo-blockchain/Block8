const getLotto = ({ totalNumber, count }) => {
    const result = new Array(count).fill(null)
    const lotto = new Array(totalNumber).fill(null).map((value, index) => index + 1)
    const ClassPattern = {
        0: "a",
        1: "b",
        2: "c",
        3: "d",
        4: "e",
    }

    const getNumber = (start, end) => {
        const random = Math.floor(Math.random() * (end - start) + start)
        return end < start ? null : random
    }

    const getSpliceNumber = (arr) => (v) => {
        const lottoIndex = getNumber(1, arr.length)
        const [number] = arr.splice(lottoIndex, 1)
        return number
    }

    const randomLotto = () => result.map(getSpliceNumber(lotto)).sort((a, b) => a - b)
    const between = (number) => Math.ceil(number / 10) - 1
    const getClassName = (arr) => arr.map((v) => ClassPattern[between(v)])

    const lottoArr = randomLotto()

    return {
        lotto: lottoArr,
        className: getClassName(lottoArr),
    }
}

class Lotto {
    constructor({ totalNumber, count }) {
        this.lotto
        this.className
    }

    getNumber() {}
    getSpliceNumber() {}
    randomLotto() {}
    between() {}
    getClassName() {}
}

const config = {
    totalNumber: 45,
    count: 6,
}
const { className, lotto: lottoArr } = getLotto(config)
console.log(className, lottoArr)

const a = new Lotto(config)
