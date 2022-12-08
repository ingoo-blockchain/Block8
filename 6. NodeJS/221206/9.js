// 문제 1 부터 100까지 Print
// 3의 배수는 Fizz 출력 5의 배수는 Buzz 출력
// 3의 배수이면서 5의 배수이면 FizzBuzz 출력
// 아니면 숫자 출력
const multiples = (num, mul, print) => num % mul === 0 && print
const question = [
    [3, "Fizz"],
    [5, "Buzz"],
]
for (let i = 1; i <= 100; i++) {
    console.log(
        question
            .map((v) => multiples(i, v[0], v[1]))
            .filter((v) => v)
            .join("") || i
    )
}
