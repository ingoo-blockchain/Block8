function checkName(value) {
    if (value !== "ingoo") {
        throw new Error("나 에러났음^^")
    }

    return true
}

// name === "ingoo"

try {
    // 코드를 실행할 영역
    let name = "ingoo1"
    checkName(name)
    // 아래에 중요한 로직..
} catch (e) {
    // 에러가 날경우 실행!
    console.log(e)
}
