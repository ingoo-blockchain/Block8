console.log("array")

// a 변수에다가 [1,2,3] 담는거 타입추론하지말고 만들어봐~

{
    const strArr: string[] = ["1", "2", "3"]
    const numArr: number[] = [1, 2, 3]
}

// 튜플

{
    const tuple: [string, number] = ["hello", 123]

    tuple[0]
    tuple[1]
}
