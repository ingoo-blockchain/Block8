// class 달 Element
// mouseOver 할 Element

const gnbElement = document.querySelector("#gnb")
const gnbs = document.querySelectorAll("#gnb > li")
const header = document.querySelector("#header")

for (let i = 0; i < gnbs.length; i++) {
    gnbs[i].addEventListener("mouseover", function () {
        gnbElement.classList.add("on")
    })
}

header.addEventListener("mouseout", function (e) {
    if (e.target.id === "gnb") {
        gnbElement.classList.remove("on")
    }
})
