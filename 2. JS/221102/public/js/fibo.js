// 메모이제이션
let memo = {}
/**
 * 
 
{
    "4":3
    "3":2
    "2":1,
    "1":1
}

 */

function fibo(n) {
    let result

    if (n in memo) {
        result = memo[n]
    } else {
        if (n == 1 || n == 2) {
            // result = 1
            result = 1
        } else {
            result = fibo(n - 1) + fibo(n - 2)
        }

        memo[n] = result
    }

    return result
}

// 1 1 2 3 5 8 13 21 34 55

function fibo(n) {
    if (n == 1 || n == 2) return 1
    return fibo(n - 1) + fibo(n - 2)
}

// 생각보다 진도 빠르다 생각함

//
