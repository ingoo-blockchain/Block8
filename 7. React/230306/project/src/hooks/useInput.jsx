import { useState } from "react"

export const useInput = (initialState) => {
    const [value, setValue] = useState(initialState)
    const onChange = (e) => {
        const { value } = e.target
        setValue(value)
    }

    return {
        value,
        onChange,
    }
}
