const btn = document.querySelector(".btn")
const btn2 = document.querySelector(".btn2")
const display = document.querySelector("#display")

function handler(e) {
    display.classList.remove("none")
    if (e.type === "click") {
        display.innerHTML = "마우스를 클릭했다!"
    } else if (e.type === "mouseover") {
        display.innerHTML = "마우스를 올렸다!"
    }
}

btn.addEventListener("click", handler)
btn2.addEventListener("mouseover", handler)

// event object : object..
function handler2(e) {
    // e.target : Element
    console.log(e.target)

    // e.target.style = "display:none;"
    e.target.classList.add("none")
}

display.addEventListener("click", handler2)

const person = {
    name: "ingoo",
}

// display.className = "b box"

const text = "b box"
const classList = text.split(" ") //["b","box"]
// console.log(display.classList)

// .push()
// display.classList.add("view")
// display.classList.remove("box")
// display.classList.remove("b")
