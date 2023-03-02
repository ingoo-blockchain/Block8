import React, { useRef, useEffect, useState } from "react"
import style from "../public/input.module.css" // style-loader
import styled from "../public/hello.module.css"
import useInput from "./useInput"

// style element
// 커스텀 훅
// 중복적인 코드를 없애기 위함.
// input 박스에다가 상태로 관리를 시작한다면,
//  Element value속성의 defautl값을 state 넣다보니깐, 이벤트가 들어감, onChange

const Ref = () => {
    const input = useRef(null) // { current: null }

    const [userid, setUserid] = useState()
    const [userpw, setUserPw] = useState("")

    const obj4 = useInput("Hello world!!!") // {value:'', onChange:()=>{ console.log('hello world!') }}

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submit : ", input.current)
    }

    useEffect(() => {
        console.log("effect : ", input.current)
    }, [])

    const obj = {
        name: "username",
        id: "username",
    }

    const submit = { onSubmit: handleSubmit }

    const handleChange = (e) => {
        setUserid(e.target.value)
    }

    const handleChange2 = (e) => {
        setUserPw(e.target.value)
    }

    const obj3 = {
        value: userid,
        onChange: handleChange,
    }

    return (
        <>
            <form {...submit}>
                <input type="text" {...obj} ref={input} className={style.username} />

                <input type="text" name="userid" {...obj3} />
                <input type="text" name="userpw" {...obj4} />

                <button type="submit" className={styled.username}>
                    포커스!
                </button>
            </form>
        </>
    )
}

React.createElement(
    "input",
    {
        name: "username",
        id: "username",
        ref: "asdf",
    },
    null
)

export default Ref
