const proxy = new Proxy(
    {},
    {
        get(trapTarget, key, receiver) {
            if (!(key in receiver)) {
                throw new TypeError(`property ${key} doesn't exist.`)
            }
            return Reflect.get(trapTarget, key, receiver)
        },
    }
)

proxy.name = "proxy"
console.log(proxy.age) // TypeError : property age doesn't exist.

// 4000
// 3800
// 3600
// 3200 ~ 3400 


