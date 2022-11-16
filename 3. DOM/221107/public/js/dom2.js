const gnb = document.querySelector("#gnb")
const list = document.querySelectorAll("#gnb > li")
console.log(list)
// Array
const 배열 = [
    {
        name: "ingoo",
    },
    {
        name: "ingoo2",
    },
    {
        name: "ingoo3",
    },
]

console.log(list[1])
list[1].innerHTML = "hello world!"
