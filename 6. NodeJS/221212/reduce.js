// reduce 

// Javascript 
//  - Array
//  - Array.protoype.redcue()
//     - return 값이. any 어떠한 데이터타입이라도 됩니다.
//     - array에서 다른타입으로 바꾸고싶을때 사용하는 메서드 
// array -> number , array -> string , array -> object , array-...?
// 주로 array -> object 만들때 많이 사용합니다. number 나 string? 정도? 


const arr = ['Host:localhost','Connection:keep-alive','Content-Type:application/json']

// 

let initialValue = {}

const obj = arr.reduce((acumulator, currentValue, index, array)=>{
    const [key, val] = currentValue.split(":") // Host:localhost -> [Host,localhost]
    acumulator[key] = val
    return acumulator
}, initialValue);
console.log(obj)