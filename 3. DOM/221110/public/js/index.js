const elements = document.querySelectorAll("#visual > li")

let count = 1
const intervalId = setInterval(function () {
    for (let i = 0; i < elements.length; i++) {
        if (i === count) elements[i].classList.add("on")
        else elements[i].classList.remove("on")
    }
    if (++count == 5) count = 0
}, 3000)

// const arr = ["X", "X", "X", "X", "X"]

const arr = ["X", "X", "X", "X", "X"] // 5
// [O] [X] [X] [X] [X]
// [X] [O] [X] [X] [X]
// [X] [X] [O] [X] [X]
// [X] [X] [X] [O] [X]
// [X] [X] [X] [X] [O]

// arr[0] = "O"
// console.log(arr)
// arr[0] = "X"
// arr[1] = "O"
// console.log(arr)
// arr[1] = "X"
// arr[2] = "O"
// console.log(arr)
// arr[2] = "X"
// arr[3] = "O"
// console.log(arr)
// arr[3] = "X"
// arr[4] = "O"
// console.log(arr)

for (let i = 0; i < arr.length; i++) {
    if (i !== 0) arr[i - 1] = "X"
    arr[i] = "O"
    console.log(arr)
}
