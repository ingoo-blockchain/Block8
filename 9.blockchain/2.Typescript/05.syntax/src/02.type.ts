// Javascript
{
    const num = 10
    const float: number = 3.14
    const nan: number = NaN
    const infinity: number = Infinity
}

{
    const str: string = "Hello Typescript!"
}

{
    const bool: boolean = true
}

{
    let nullValue: null = null
    let undefinedValue: undefined = undefined
}

{
    // Void
    const print = (str: string): void => {
        console.log(str)
    }

    const sum = (a: number, b: number): number => a + b

    print("hello world!")

    const result: number = sum(1, 2)
}

{
    // never
    const throwErr = (): never => {
        throw new Error("일단 에러~")
    }

    const loop = (): never => {
        while (true) {
            console.log("asdfasdf")
        }
    }

    const repository = (): number => {
        throwErr()
        return 10
    }

    const service = (): string => {
        const num = repository()
        return "hello world!" + num
    }

    const contorller = (): void => {
        try {
            const result = service()
        } catch (e) {
            console.log(e)
        }
    }

    contorller()
}

//

{
    const obj: object = {}
    const arr: object = []
    const func: object = () => {}
}

{
    // any : 어떤 타입이든 할당할수있음 타입 안정성이 보장안댐!
    const a: any = 10

    const b: number = 10
}

{
    //unknown : 어떤타입이든 할당할수있음 타입 안정성이 보장댐!
    const a: unknown = 10

    const getValue = (value: unknown): string => {
        if (typeof value === "string") return value
        return ""
    }

    const fn = getValue(1)
}

/*
never : 무한루프를 돌거나 반환할수없는 타입을 지정할때. 
void : 반환값이 없는 (undefiend)
undefined : 값이 할당되지 않는것
null : 그냥 값이 없을때
unknown: any와 진짜 비슷하지만 단 타입의 안정성만 보장
*/
