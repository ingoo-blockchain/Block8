const person = {
    name: "ingoo",
    age: "33",
    key: 180,
    weight: 78,
}

function a(obj) {
    console.log(obj)
}

const { name, ...rest } = person
a({ ...rest, a: 10 }) // {age,key,weight,a:10}
