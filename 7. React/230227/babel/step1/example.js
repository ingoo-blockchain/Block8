const fn = (message) => {
    const arr = [1, 2, 3, 4, 5]
    const arr2 = [6, 7, 8, 9, 0]

    const arr3 = [...arr, ...arr2]
    console.log(...arr3, message)
}

fn("hello world!")
