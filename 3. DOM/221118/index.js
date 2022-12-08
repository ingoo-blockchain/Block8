const obj = {
    name: "ingoo",
    sizes: {
        height: 180,
        weight: 80,
        a: [1, 2, 3, 4],
    },
}

const obj2 = { ...obj, sizes: { ...obj.sizes } }
objs2.sizes.height = 178

const arr = [obj, obj2]
arr[0].sizes.a[2]

// for문
// 배열 요소중에 짝수만 출력

// 모든 요소 출력
const arr2 = [2, 7, 5, 4, 5]
for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i])
}

// 배열은 for 문이랑 짝꿍..
// 배열 method는 반복을 돌려주는 함수들이 정말 많다.

// forEach
// filter
// some
// map
// reduce
// ...
