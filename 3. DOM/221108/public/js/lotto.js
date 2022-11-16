// 쉬운것부터 하나하나씩.
// 1. 번호생성 버튼을 누르면. #lotto엘리먼트 보이게 하고싶다.
//   X 1.1 번호생성버튼 에다가 이벤트(click)를 넣자
//      X 1.1.1 번호생성 엘리먼트를 선택해서 가져올수있어야함 = querySelector()
//      X 1.1.2 #lotto 선택해서 가져오기

// 2. 랜덤숫자를 뽑아서 부여하는것
//  X 2.1 랜덤숫자를 뽑는것 랜덤숫자뽑는방법! 1~45
//  2.2 랜덤숫자를 부여 (언제부여할꺼냐)
//      2.2.1 클릭할떄 랜덤값 생성해보기!
//      2.2.2 랜덤값 6개 만들기!
//      2.2.3 엘리먼트 선택...? querySelectorAll()
//      2.2.4 각각 순서에맞게 내용을 넣어주기

// 문제 확인하기!
// 1. 색깔이 안바뀜...
//   1.1 내가랜덤으로 뽑은 숫자가 범위가 어디에 해당되는지.
//       1~10, 11~20, 21~30, 31~40, 41~45
//       1.1.1 12 숫자가있을때 1~10
//              9 숫자가있을때 1~10
//   1.2 input 1~45 1~10 a, 11~20 b, 21~30 c
//   className을 활용해서 처리하자.
// 2. 로또는..중복값이 없어야합니다..

// 코드로서 문제가있는거같다.

const btn = document.querySelector("#btn")
const lottoDisplay = document.querySelector("#lotto")
const lottoBox = document.querySelectorAll("#lotto > li")

function randomLotto() {
    const random = Math.floor(Math.random() * 45 + 1)
    return random
}

// input 12, 9
// 문제 : 1~10에 해당하는가?
// output : true, false
// 9 1 10 between(9, 1, 10)
// 41 40 45 between(41, 40, 45)
function between(num, min, max) {
    if (num >= min && num <= max) {
        return true
    }
    return false
}

// input 1~45
// 문제 1~10 a, 11~20 b, 21~30 c ...
// output : a || b || c || d || e
function getClassName(num) {
    if (between(num, 41, 45)) {
        return "e"
    }

    if (between(num, 31, 40)) {
        return "d"
    }

    if (between(num, 21, 30)) {
        return "c"
    }

    if (between(num, 11, 20)) {
        return "b"
    }

    if (between(num, 1, 10)) {
        return "a"
    }
}

function lottoHandler(e) {
    for (let i = 0; i < 6; i++) {
        const num = randomLotto()
        const className = getClassName(num)

        lottoBox[i].innerHTML = num
        lottoBox[i].className = className
    }

    lottoDisplay.classList.remove("none")
}
btn.addEventListener("click", lottoHandler)
